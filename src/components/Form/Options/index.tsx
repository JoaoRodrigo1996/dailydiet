import { TouchableOpacityProps } from "react-native";

import { Container, Icon, OptionStyleTypeProps, Text } from "./styles";

interface OptionsProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
  type?: OptionStyleTypeProps;
}

export function Options({
  title,
  type = "PRIMARY",
  isActive = false,
  ...rest
}: OptionsProps) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} />
      <Text>{title}</Text>
    </Container>
  );
}
