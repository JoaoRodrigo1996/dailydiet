import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { getAllMeals } from "../../storage/diet/getAllMeals";
import { MealStorageDTO } from "../../storage/diet/GroupStorageDTO";
import { removeMeal } from "../../storage/diet/removeMeal";

import {
  Actions,
  CenteredModalView,
  Container,
  Content,
  DateAndTime,
  DayAndHour,
  Description,
  Icon,
  MealInfo,
  MealStatus,
  ModalButton,
  ModalText,
  ModalView,
  Status,
  Title,
} from "./styles";

interface RouteParams {
  name: string;
}

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false);
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
              onPress={() => setModalVisible(true)}
            />
          </Actions>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
            onDismiss={removeMealByName}
          >
            <ModalView>
              <CenteredModalView>
                <ModalText>Deseja realmente excluir o{'\n'} registro da refeição?</ModalText>
                <ModalButton>
                  <Button onPress={() => setModalVisible(!modalVisible)} title="Cancelar" type="SECONDARY" style={{ marginRight: 12, flex: 1 }} />
                  <Button onPress={() => removeMealByName()} title="Sim, excluir" style={{ flex: 1 }} />
                </ModalButton>
              </CenteredModalView>
            </ModalView>
          </Modal>
        </Content>
      )}
    </Container>
  );
}
