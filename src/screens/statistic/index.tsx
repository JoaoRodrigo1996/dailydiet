import { useRoute } from "@react-navigation/native";
import { StatisticHeader } from "../../components/StatisticHeader";
import { Summary } from "../../components/Summary";
import {
  Container,
  Content,
  Data,
  Info,
  Sequence,
  SubTitle,
  Text,
  Title,
} from "./styles";

interface RouteParams {
  consecutivesMealsOnDiet: number;
  totalMealsOffDiet: number;
  totalMealsOnDiet: number;
  totalMeals: number;
  percentDietMeals: number;
}

export function Statistic() {
  const route = useRoute();
  const {
    consecutivesMealsOnDiet,
    percentDietMeals,
    totalMeals,
    totalMealsOffDiet,
    totalMealsOnDiet,
  } = route.params as RouteParams;

  return (
    <Container type={percentDietMeals >= 50 ? "PRIMARY" : "SECONDARY"}>
      <StatisticHeader
        type={percentDietMeals >= 50 ? "PRIMARY" : "SECONDARY"}
        title={percentDietMeals}
      />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Data>
          <Sequence>
            <Text>{consecutivesMealsOnDiet}</Text>
            <SubTitle>melhor sequência de pratos dentro da dieta</SubTitle>
          </Sequence>
          <Sequence>
            <Text>{totalMeals}</Text>
            <SubTitle>refeições registradas</SubTitle>
          </Sequence>

          <Info>
            <Summary
              title={totalMealsOnDiet}
              size="NORMAL"
              subtitle="refeições dentro da dieta"
              type="PRIMARY"
            />
            <Summary
              title={totalMealsOffDiet}
              size="NORMAL"
              subtitle="refeições fora da dieta"
              type="SECONDARY"
              style={{ marginLeft: 12 }}
            />
          </Info>
        </Data>
      </Content>
    </Container>
  );
}
