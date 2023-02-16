import { BackButton } from "../BackButton";
import { Container, SubTitle, Title } from "./styles";

export function StatisticHeader() {
  return (
    <Container type="PRIMARY">
      <BackButton type="PRIMARY" />
      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
