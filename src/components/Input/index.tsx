import { TextInputProps } from "react-native";

import { Container, InputText, Label } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  size?: number;
}

export function Input({ size, label, ...rest }: InputProps) {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
      <InputText style={{ height: size }} />
    </Container>
  );
}
