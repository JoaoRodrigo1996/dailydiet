import { Button } from "../Button";
import { ButtonContainer } from "./styles";

export function Options() {
  return (
    <ButtonContainer>
      <Button
        variant="GREEN"
        icon="stop-circle"
        title="Sim"
        type="SECONDARY"
        showIcon
        style={{ marginRight: 8 }}
      />
    </ButtonContainer>
  );
}
