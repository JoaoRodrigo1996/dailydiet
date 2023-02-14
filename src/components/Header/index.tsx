import { Avatar, Container, Logo } from "./styles";

import dailyImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={dailyImg} />
      <Avatar source={{ uri: "https://github.com/JoaoRodrigo1996.png" }} />
    </Container>
  );
}
