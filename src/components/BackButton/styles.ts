import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

interface BackButtonStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled.TouchableOpacity``;

export const Icon = styled(ArrowLeft).attrs<BackButtonStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
  })
)``;
