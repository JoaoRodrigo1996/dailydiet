import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { Meals } from "../../components/Meals";
import { Summary } from "../../components/Summary";

import { Container } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  function handleStatisticScreen() {
    navigate("statistic");
  }

  return (
    <Container>
      <Header />
      <Summary
        title="90,86%"
        size="LARGE"
        subtitle="das refeições dentro da dieta"
        type="PRIMARY"
        showIcon
        onPress={handleStatisticScreen}
      />

      <Meals />
    </Container>
  );
}
