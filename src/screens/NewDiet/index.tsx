import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, View } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Form/Input";
import { Options } from "../../components/Form/Options";
import { createDiet } from "../../storage/diet/createDiet";
import { AppError } from "../../utils/AppError";

import {
  BackButton,
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

export function NewDiet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [diet, setDiet] = useState(false);

  const { navigate, goBack } = useNavigation();

  async function handleCreateMeal() {
    try {
      if (name.trim().length === 0) {
        return Alert.alert("Noava refeição", "Informe o nome da refeição.");
      }

      if (diet === null) {
        return Alert.alert(
          "Nova refeição",
          "Informe se a refeição está ou não dentro da dieta."
        );
      }

      const newDiet = {
        name,
        description,
        date,
        time,
        status: diet,
      };

      await createDiet(newDiet);

      navigate("feedback");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Nova refeição", error.message);
      } else {
        console.log(error);
        return Alert.alert(
          "Nova refeição",
          "Não foi possível criar uma nova refeição"
        );
      }
    }
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon />
        </BackButton>
        <Title>Nova refeição</Title>
        <View />
      </Header>
      <Content contentContainerStyle={{ paddingBottom: 100 }}>
        <Form>
          <Input label="Nome" value={name} onChangeText={setName} />
          <Input
            label="Descrição"
            multiline={true}
            numberOfLines={4}
            style={{ height: 120, textAlignVertical: "top" }}
            value={description}
            onChangeText={setDescription}
          />

          <DateTimeContainer>
            <Input
              label="Data"
              style={{ marginRight: 12 }}
              value={date}
              onChangeText={setDate}
            />
            <Input label="Hora" value={time} onChangeText={setTime} />
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
        <Button title="Cadastrar refeição" onPress={handleCreateMeal} />
      </Content>
    </Container>
  );
}
