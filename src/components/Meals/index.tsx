import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";
import { getAllMeals } from "../../storage/diet/getAllMeals";
import { MealStorageDTO } from "../../storage/diet/GroupStorageDTO";

import { Button } from "../Button";
import { MealCard } from "../MealCard";

import { Container, MealDate, Title } from "./styles";

interface MealsData {
  title: string;
  data: MealStorageDTO[];
}

export function Meals() {
  const [meals, setMeals] = useState<MealsData[]>([]);
  const DATA = [
    {
      date: "14.02.2023",
      data: [
        { time: "20:00", meal: "X-tudo", status: false },
        { time: "18:00", meal: "Whey protein", status: true },
        {
          time: "16:00",
          meal: "Salada cesar com frango grelhado",
          status: true,
        },
        {
          time: "14:00",
          meal: "Vitamina de banana com abacate awd awd awd asdasdawadd",
          status: true,
        },
      ],
    },
    {
      date: "15.02.2023",
      data: [
        { time: "19:00", meal: "Pizza", status: false },
        { time: "17:00", meal: "Bife", status: true },
        {
          time: "13:00",
          meal: "Ovos mechidos",
          status: true,
        },
        { time: "11:00", meal: "Água", status: true },
      ],
    },
  ];

  const { navigate } = useNavigation();

  function handleCreateMeal() {
    navigate("new");
  }

  async function fetchAllMeals() {
    try {
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

      setMeals(mealsGroupByDate);
    } catch (error) {
      console.log(error);
      Alert.alert("Dieta", "Não foi possível carregar as dietas disponíveis.");
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllMeals();
    }, [])
  );

  return (
    <Container>
      <Title>Refeições</Title>
      <Button
        icon="add"
        title="Nova refeição"
        showIcon
        onPress={handleCreateMeal}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <MealCard
            time={item.time}
            title={item.name}
            status={item.status ? "PRIMARY" : "SECONDARY"}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <MealDate>{title}</MealDate>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
