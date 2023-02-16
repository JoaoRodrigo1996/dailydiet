import { View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  BackButton,
  ButtonContainer,
  Container,
  Content,
  DateTimeContainer,
  Form,
  Header,
  Icon,
  InputContainer,
  Label,
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
          <Input label="Nome" />
          <Input label="Descrição" size={120} />

          <DateTimeContainer>
            <Input label="Data" style={{ marginRight: 12 }} />
            <Input label="Hora" />
          </DateTimeContainer>

          <InputContainer>
            <Label>Está dentro da dieta?</Label>
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
