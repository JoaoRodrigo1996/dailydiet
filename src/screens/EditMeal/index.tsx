import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert, View } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Form/Input";
import { Options } from "../../components/Form/Options";
import { editMealByName } from "../../storage/diet/editMealByName";
import { getAllMeals } from "../../storage/diet/getAllMeals";
import { MealStorageDTO } from "../../storage/diet/GroupStorageDTO";
import { AppError } from "../../utils/AppError";
import {
  Container,
  Content,
  DateTimeContainer,
  Form,
  Header,
  Icon,
  InputContainer,
  Label,
  OptionContainer,
  Title,
} from "./styles";

interface RouteParams {
  mealName: string;
}

export function EditMeal() {
  const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [diet, setDiet] = useState<boolean | null>(null);

  const { navigate, goBack } = useNavigation();

  const route = useRoute();
  const { mealName } = route.params as RouteParams;

  function handleGoBack() {
    goBack();
  }

  async function fetchMeal() {
    try {
      const storedMeals = await getAllMeals();
      const meal =
        storedMeals.find((meal) => meal.name === mealName) ??
        ({} as MealStorageDTO);

      setMeal(meal);
      setDiet(meal.status);
    } catch (error) {
      console.log(error);
      Alert.alert("Editar refeição", "Não foi possível editar a refeição");
    }
  }

  async function handleEditMeal() {
    try {
      if (diet === null) {
        return Alert.alert(
          "Editar refeição",
          "Selecione se sua refeição está dentro ou fora da dieta."
        );
      }

      const newMealEdited = {
        name,
        description,
        date,
        time,
        status: diet,
      };

      await editMealByName(mealName, newMealEdited);

      console.log(`meal - ${meal}`);

      navigate("meal", { name });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Editar refeição", error.message);
      } else {
        Alert.alert("Editar refeição", "Não foi possível editar refeição");
        console.log(error);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [mealName])
  );

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon />
        </BackButton>
        <Title>Editar refeição</Title>
        <View />
      </Header>
      <Content contentContainerStyle={{ paddingBottom: 100 }}>
        <Form>
          <Input label="Nome" defaultValue={meal.name} onChangeText={setName} />
          <Input
            label="Descrição"
            multiline={true}
            numberOfLines={4}
            style={{ height: 120, textAlignVertical: "top" }}
            defaultValue={meal.description}
            onChangeText={setDescription}
          />

          <DateTimeContainer>
            <Input
              label="Data"
              style={{ marginRight: 12 }}
              defaultValue={meal.date}
              onChangeText={setDate}
            />
            <Input
              label="Hora"
              defaultValue={meal.time}
              onChangeText={setTime}
            />
          </DateTimeContainer>

          <InputContainer>
            <Label>Está dentro da dieta?</Label>
            <OptionContainer>
              <Options
                title="Sim"
                isActive={diet || false}
                onPress={() => setDiet(true)}
              />
              <Options
                title="Não"
                type="SECONDARY"
                isActive={diet === null ? false : !diet}
                onPress={() => setDiet(false)}
                style={{ marginLeft: 12 }}
              />
            </OptionContainer>
          </InputContainer>
        </Form>
        <Button title="Salvar alterações" onPress={handleEditMeal} />
      </Content>
    </Container>
  );
}
