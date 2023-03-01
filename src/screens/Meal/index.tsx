import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { getAllMeals } from "../../storage/diet/getAllMeals";
import { MealStorageDTO } from "../../storage/diet/GroupStorageDTO";
import { removeMeal } from "../../storage/diet/removeMeal";

import {
  Actions,
  Container,
  Content,
  DateAndTime,
  DayAndHour,
  Description,
  Icon,
  MealInfo,
  MealStatus,
  Status,
  Title,
} from "./styles";

interface RouteParams {
  name: string;
}

export function Meal() {
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { name } = route.params as RouteParams;

  const { navigate } = useNavigation();

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const storage = await getAllMeals();
      const meals =
        storage.find((meal) => meal.name === name) ?? ({} as MealStorageDTO);

      setMeal(meals);
    } catch (error) {
      console.log(error);
      Alert.alert("Carregar refeição", "Não foi possível carregar a refeição");
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditMeal() {
    navigate("edit", { mealName: name });
  }

  async function removeMealByName() {
    try {
      await removeMeal(name);
      navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover refeição", "Não foi possível remover a refeição.");
    }
  }

  async function handleRemoveMeal() {
    Alert.alert("Remover refeição", "Deseja remover esta refeição", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => removeMealByName() },
    ]);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [name])
  );

  return (
    <Container type={meal.status ? "PRIMARY" : "SECONDARY"}>
      <Header title="Refeição" type={meal.status ? "PRIMARY" : "SECONDARY"} />
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
          <MealInfo>
            <Title>{meal.name}</Title>
            <Description>{meal.description}</Description>

            <DateAndTime>Data e hora</DateAndTime>
            <DayAndHour>
              {meal.date} às {meal.time}
            </DayAndHour>
            <Status>
              <Icon type={meal.status ? "PRIMARY" : "SECONDARY"} />
              <MealStatus>
                {meal.status ? "dentro da dieta" : "fora da dieta"}
              </MealStatus>
            </Status>
          </MealInfo>

          <Actions>
            <Button
              title="Editar refeição"
              showIcon
              icon="edit"
              style={{ marginBottom: 8 }}
              onPress={handleEditMeal}
            />
            <Button
              title="Excluir refeição"
              showIcon
              icon="restore"
              type="SECONDARY"
              onPress={handleRemoveMeal}
            />
          </Actions>
        </Content>
      )}
    </Container>
  );
}
