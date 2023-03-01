import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../BackButton";

import { Container, SubTitle, Title } from "./styles";

interface StatisticHeaderProps {
  title: number;
  type: "PRIMARY" | "SECONDARY";
}

export function StatisticHeader({ title, type }: StatisticHeaderProps) {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container type={type}>
      <BackButton type={type} onPress={handleGoBack} />
      <Title>{title}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
