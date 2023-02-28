import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../BackButton";

import { Container, SubTitle, Title } from "./styles";

export function StatisticHeader() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container type="PRIMARY">
      <BackButton type="PRIMARY" onPress={handleGoBack} />
      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
