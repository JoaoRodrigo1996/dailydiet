import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface BackButtonProps extends TouchableOpacityProps {
  type: "PRIMARY" | "SECONDARY";
}

export function BackButton({ type, ...rest }: BackButtonProps) {
  return (
    <Container {...rest}>
      <Icon type={type} />
    </Container>
  );
}
