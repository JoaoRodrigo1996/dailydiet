import { useState } from "react";

import { View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Form/Input";
import { Options } from "../../components/Form/Options";

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
  const [buttonVariant, setButtonVariant] = useState<"IN" | "OUT" | "DEFAULT">(
    "DEFAULT"
  );

  return (
    <Container>
      <Header>
        <BackButton>
          <Icon />
        </BackButton>
        <Title>Nova refeição</Title>
        <View />
      </Header>
      <Content contentContainerStyle={{ paddingBottom: 100 }}>
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" size={120} />

          <DateTimeContainer>
            <Input label="Data" style={{ marginRight: 12 }} />
            <Input label="Hora" />
          </DateTimeContainer>

          <InputContainer>
            <Label>Está dentro da dieta?</Label>
            <OptionContainer>
              <Options
                title="Sim"
                icon="circle"
                iconColor="IN"
                variant={buttonVariant === "IN" ? "IN" : "DEFAULT"}
                onPress={() => setButtonVariant("IN")}
              />
              <Options
                title="Não"
                icon="circle"
                iconColor="OUT"
                variant={buttonVariant === "OUT" ? "OUT" : "DEFAULT"}
                onPress={() => setButtonVariant("OUT")}
                style={{ marginLeft: 12 }}
              />
            </OptionContainer>
          </InputContainer>
        </Form>
        <Button title="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
