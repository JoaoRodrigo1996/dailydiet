import { View } from "react-native";
import { BackButton } from "../BackButton";
import { Container, Title } from "./styles";

interface HeaderProps {
  title: string;

  type?: "PRIMARY" | "SECONDARY";
}

export function Header({
  title,

  type = "PRIMARY",
}: HeaderProps) {
  return (
    <Container type={type}>
      <BackButton />
      <Title>{title}</Title>
      <View />
    </Container>
  );
}
