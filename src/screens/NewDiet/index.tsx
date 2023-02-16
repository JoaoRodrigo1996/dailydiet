import { View } from "react-native";
import { Button } from "../../components/Button";

import {
  BackButton,
  ButtonContainer,
  Container,
  Content,
  DateContainer,
  DateTimeContainer,
  Form,
  Header,
  Icon,
  InputContainer,
  InputText,
  Label,
  TimeContainer,
  Title,
} from "./styles";

export function NewDiet() {
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
          <InputContainer>
            <Label>Nome</Label>
            <InputText />
          </InputContainer>
          <InputContainer>
            <Label>Descrição</Label>
            <InputText style={{ height: 120 }} />
          </InputContainer>
          <DateTimeContainer>
            <DateContainer>
              <Label>Data</Label>
              <InputText />
            </DateContainer>
            <TimeContainer>
              <Label>Hora</Label>
              <InputText />
            </TimeContainer>
          </DateTimeContainer>
          <InputContainer>
            <Label>Está dentro da dieta</Label>
            <ButtonContainer>
              <Button
                variant="GREEN"
                icon="stop-circle"
                title="Sim"
                type="SECONDARY"
                showIcon
                style={{ marginRight: 8 }}
              />
              <Button
                variant="RED"
                icon="stop-circle"
                title="Não"
                type="SECONDARY"
                showIcon
              />
            </ButtonContainer>
          </InputContainer>
        </Form>
        <Button title="Cadastrar refeição" />
      </Content>
    </Container>
  );
}
