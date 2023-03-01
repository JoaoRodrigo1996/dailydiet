import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface BackButtonProps extends TouchableOpacityProps {
  type?: "PRIMARY" | "SECONDARY";
}

export function BackButton({ type = "PRIMARY", ...rest }: BackButtonProps) {
  const { goBack } = useNavigation();
  return (
    <Container onPress={goBack} {...rest}>
      <Icon />
    </Container>
  );
}
