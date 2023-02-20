import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Text } from "./styles";

interface OptionsProps extends TouchableOpacityProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor?: "IN" | "OUT";
  variant: "IN" | "OUT" | "DEFAULT";
}

export function Options({
  title,
  icon,
  variant,
  iconColor,
  ...rest
}: OptionsProps) {
  return (
    <Container variant={variant} {...rest}>
      <Icon name={icon} iconColor={iconColor} />
      <Text>{title}</Text>
    </Container>
  );
}
