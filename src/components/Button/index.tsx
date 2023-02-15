import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  showIcon?: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  showIcon = false,
  title,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest}>
      {showIcon ? <Icon name={icon} /> : null}

      <Title>{title}</Title>
    </Container>
  );
}
