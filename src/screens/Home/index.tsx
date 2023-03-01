import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Summary } from "../../components/Summary";

import dailyImg from "../../assets/logo.png";

import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { MealCard } from "../../components/MealCard";
import { getAllMeals } from "../../storage/diet/getAllMeals";
import { MealStorageDTO } from "../../storage/diet/GroupStorageDTO";
import {
  Avatar,
  Container,
  Content,
  HeaderContainer,
  Logo,
  MealDate,
  Title,
} from "./styles";

interface MealsData {
  title: string;
  data: MealStorageDTO[];
}

export function Home() {
  const [meals, setMeals] = useState<MealsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalMeals, setTotalMeals] = useState(0);
  const [totalMealsOnDiet, setTotalMealsOnDiet] = useState(0);
  const [totalMealsOffDiet, setTotalMealsOffDiet] = useState(0);
  const [consecutivesMealsOnDiet, setConsecutivesMealsOnDiet] = useState(0);

  const percentDietMeals = Number(
    ((totalMealsOnDiet * 100) / totalMeals).toFixed(2)
  );

  const { navigate } = useNavigation();

  function handleStatisticScreen() {
    navigate("statistic", {
      consecutivesMealsOnDiet,
      totalMealsOffDiet,
      totalMealsOnDiet,
      totalMeals,
      percentDietMeals,
    });
  }

  function handleCreateMeal() {
    navigate("new");
  }

  async function fetchAllMeals() {
    try {
      setIsLoading(true);
      const storedMeals = await getAllMeals();

      const mealsFilteredByDate = storedMeals.reduce((meals, value) => {
        const { date } = value;

        if (!meals[date]) {
          meals[date] = [];
        }

        meals[date].push(value);

        return meals;
      }, {} as Record<string, MealStorageDTO[]>);

      const mealsGroupByDate = Object.keys(mealsFilteredByDate).map((date) => {
        return { title: date, data: mealsFilteredByDate[date] };
      });

      const dietOnMeals = storedMeals.filter((meal) => meal.status === true);
      const dietOutMeals = storedMeals.filter((meal) => meal.status === false);

      setMeals(mealsGroupByDate);
      setTotalMealsOffDiet(dietOutMeals.length);
      setTotalMealsOnDiet(dietOnMeals.length);
      setTotalMeals(storedMeals.length);

      let max = 0;
      let count = 0;

      storedMeals.forEach((meal) => {
        if (meal.status) {
          count++;
        } else {
          count = 0;
        }

        if (count > max) {
          max = count;
        }

        setConsecutivesMealsOnDiet(max);
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Dieta", "Não foi possível carregar as dietas disponíveis.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleMealScreen(name: string) {
    navigate("meal", { name });
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllMeals();
      //AsyncStorage.clear();
    }, [])
  );

  return (
    <Container>
      <HeaderContainer>
        <Logo source={dailyImg} />
        <Avatar source={{ uri: "https://github.com/JoaoRodrigo1996.png" }} />
      </HeaderContainer>
      <Summary
        title={percentDietMeals}
        size="LARGE"
        subtitle="das refeições dentro da dieta"
        type={percentDietMeals >= 50 ? "PRIMARY" : "SECONDARY"}
        showIcon
        onPress={handleStatisticScreen}
      />

      <Content>
        <Title>Refeições</Title>
        <Button
          icon="add"
          title="Nova refeição"
          showIcon
          onPress={handleCreateMeal}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <SectionList
            sections={meals}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
              <MealCard
                time={item.time}
                title={item.name}
                status={item.status ? "PRIMARY" : "SECONDARY"}
                onPress={() => handleMealScreen(item.name)}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <MealDate>{title}</MealDate>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
