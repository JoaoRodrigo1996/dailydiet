import { TouchableOpacityProps } from "react-native";
import { Container, Icon, SubTitle, Title } from "./styles";

interface SummaryProps extends TouchableOpacityProps {
  title: string;
  subtitle: string;
  showIcon?: boolean;
  size?: "NORMAL" | "LARGE";
  type: "PRIMARY" | "SECONDARY";
}

export function Summary({
  title,
  type,
  subtitle,
  size = "LARGE",
  showIcon = false,
  ...rest
}: SummaryProps) {
  return (
    <Container type={type} {...rest}>
      {showIcon && <Icon type={type} />}
      <Title size={size}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
