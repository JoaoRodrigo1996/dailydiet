import { SectionList } from "react-native";

import { Button } from "../Button";
import { MealCard } from "../MealCard";

import { Container, MealDate, Title } from "./styles";

export function Meals() {
  const DATA = [
    {
      date: "14.02.2023",
      data: [
        { time: "20:00", meal: "X-tudo", status: false },
        { time: "18:00", meal: "Whey protein", status: true },
        {
          time: "16:00",
          meal: "Salada cesar com frango grelhado",
          status: true,
        },
        {
          time: "14:00",
          meal: "Vitamina de banana com abacate awd awd awd asdasdawadd",
          status: true,
        },
      ],
    },
    {
      date: "15.02.2023",
      data: [
        { time: "19:00", meal: "Pizza", status: false },
        { time: "17:00", meal: "Bife", status: true },
        {
          time: "13:00",
          meal: "Ovos mechidos",
          status: true,
        },
        { time: "11:00", meal: "Água", status: true },
      ],
    },
  ];

  return (
    <Container>
      <Title>Refeições</Title>
      <Button icon="add" title="Nova refeição" showIcon></Button>

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.meal}
        renderItem={({ item }) => (
          <MealCard time={item.time} title={item.meal} status={item.status} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <MealDate>{date}</MealDate>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
