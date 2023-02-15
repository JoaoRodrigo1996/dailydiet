import { Container, Divider, Info, Status, Time, Title } from "./styles";

interface MealCardProps {
  time: string;
  title: string;
  status: boolean;
}

export function MealCard({ time, title, status }: MealCardProps) {
  return (
    <Container>
      <Info>
        <Time>{time}</Time>
        <Divider />
        <Title numberOfLines={1}>{title}</Title>
      </Info>
      <Status status={status} />
    </Container>
  );
}
