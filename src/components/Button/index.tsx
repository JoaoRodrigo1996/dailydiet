import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  showIcon?: boolean;
  type?: "PRIMARY" | "SECONDARY";
  variantColor?: "GREEN" | "RED";
  variant?: "WHITE" | "RED" | "GREEN";
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  showIcon = false,
  title,
  icon,
  variantColor,
  variant = "WHITE",
  type = "PRIMARY",
  ...rest
}: ButtonProps) {
  return (
    <Container variantColor={variantColor} type={type} {...rest}>
      {showIcon ? <Icon variant={variant} name={icon} /> : null}

      <Title type={type}>{title}</Title>
    </Container>
  );
}
