import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

interface ButtonStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

interface IconStyleProps {
  variant: "WHITE" | "RED" | "GREEN";
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  border-radius: 8px;

  ${({ theme, type }) =>
    type === "PRIMARY"
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `};
`;

export const Icon = styled(MaterialIcons).attrs<IconStyleProps>(
  ({ theme, variant }) => ({
    size: 18,
    color:
      variant === "GREEN"
        ? theme.COLORS.GREEN_DARK
        : variant === "RED"
        ? theme.COLORS.RED_DARK
        : theme.COLORS.WHITE,
    weight: "bold",
  })
)`
  margin-right: 12px;
`;

export const Title = styled.Text<ButtonStyleProps>`
  ${({ theme, type }) =>
    type === "PRIMARY"
      ? css`
          color: ${theme.COLORS.WHITE};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `
      : css`
          color: ${theme.COLORS.GRAY_100};
          font-size: ${theme.FONT_SIZE.SM}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `}
`;
