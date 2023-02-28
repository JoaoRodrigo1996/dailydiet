import { TextInputProps } from "react-native";

import { Container, InputText, Label } from "./styles";

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText {...rest} />
    </Container>
  );
}
