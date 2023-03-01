import { Button } from "../../components/Button";

import failureImg from "../../assets/images/failure.png";

import { useNavigation } from "@react-navigation/native";
import {
  Container,
  HeadingContainer,
  ImageContainer,
  SubTitle,
  Title,
} from "./styles";

export function FailedFeedback() {
  const { navigate } = useNavigation();

  function handleNavigateToHomeScreen() {
    navigate("home");
  }

  return (
    <Container>
      <HeadingContainer>
        <Title>Que pena!</Title>
        <SubTitle>
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </SubTitle>
      </HeadingContainer>
      <ImageContainer source={failureImg} />
      <Button
        title="Ir para a página inicial"
        onPress={handleNavigateToHomeScreen}
      />
    </Container>
  );
}
