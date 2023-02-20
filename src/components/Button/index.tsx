import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  showIcon?: boolean;
  type?: "PRIMARY" | "SECONDARY";

  variant?: "WHITE" | "RED" | "GREEN";
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  showIcon = false,
  title,
  icon,

  variant = "WHITE",
  type = "PRIMARY",
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {showIcon ? <Icon variant={variant} name={icon} /> : null}

      <Title type={type}>{title}</Title>
    </Container>
  );
}
