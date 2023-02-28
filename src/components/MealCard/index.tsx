import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Divider,
  Info,
  MealCardStyleStatusProps,
  Status,
  Time,
  Title,
} from "./styles";

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  title: string;
  status: MealCardStyleStatusProps;
}

export function MealCard({ time, title, status, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <Info>
        <Time>{time}</Time>
        <Divider />
        <Title numberOfLines={1}>{title}</Title>
      </Info>
      <Status status={status} />
    </Container>
  );
}
