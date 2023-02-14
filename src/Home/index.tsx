import { Header } from "../components/Header";
import { Summary } from "../components/Summary";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Summary title="90,86%" type="SECONDARY" />
    </Container>
  );
}
