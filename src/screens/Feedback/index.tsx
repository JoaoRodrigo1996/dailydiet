import { Button } from "../../components/Button";

import successImg from "../../assets/images/success.png";

import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeadingContainer,
  ImageContainer,
  SubTitle,
  Title,
} from "./styles";

export function Feedback() {
  const { navigate } = useNavigation();

  function handleNavigateToHomeScreen() {
    navigate("home");
  }

  return (
    <Container>
      <HeadingContainer>
        <Title>Continue assim!</Title>
        <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>
      </HeadingContainer>
      <ImageContainer source={successImg} />
      <Button
        title="Ir para a página inicial"
        onPress={handleNavigateToHomeScreen}
      />
    </Container>
  );
}
