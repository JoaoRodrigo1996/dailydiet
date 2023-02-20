import { TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

interface OptionStyleProps {
  variant: "IN" | "OUT" | "DEFAULT";
  iconColor?: "IN" | "OUT";
}

export const Container = styled(TouchableOpacity)<OptionStyleProps>`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border: 1px solid transparent;

  padding: 16px;
  border-radius: 8px;

  ${({ theme, variant }) =>
    variant === "IN"
      ? css`
          background-color: ${theme.COLORS.GREEN_LIGHT};
          border: 1px solid ${theme.COLORS.GREEN_DARK};
        `
      : variant === "OUT"
      ? css`
          background-color: ${theme.COLORS.RED_LIGHT};
          border: 1px solid ${theme.COLORS.RED_DARK};
        `
      : variant === "DEFAULT"
      ? css`
          background-color: ${({ theme }) => theme.COLORS.GRAY_600};
        `
      : null}
`;

export const Text = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<OptionStyleProps>(
  ({ theme, iconColor }) => ({
    size: 8,
    color: iconColor === "IN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
