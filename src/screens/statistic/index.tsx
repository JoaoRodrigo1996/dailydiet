import { Sequence } from "../../components/Sequence";
import { StatisticHeader } from "../../components/StatisticHeader";
import { Summary } from "../../components/Summary";
import { Container, Content, Data, Info, Title } from "./styles";

export function Statistic() {
  return (
    <Container>
      <StatisticHeader />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Data>
          <Sequence />
          <Sequence />
          <Info>
            <Summary
              title="99"
              size="NORMAL"
              subtitle="refeições dentro da dieta"
              type="PRIMARY"
            />
            <Summary
              title="10"
              size="NORMAL"
              subtitle="refeições fora da dieta"
              type="SECONDARY"
              style={{ marginLeft: 12 }}
            />
          </Info>
        </Data>
      </Content>
    </Container>
  );
}
