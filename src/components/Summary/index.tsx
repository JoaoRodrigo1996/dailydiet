import { TouchableOpacityProps } from "react-native";
import { Container, Icon, SubTitle, Title } from "./styles";

interface SummaryProps extends TouchableOpacityProps {
  title: string;
  type: "PRIMARY" | "SECONDARY";
}

export function Summary({ title, type, ...rest }: SummaryProps) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
