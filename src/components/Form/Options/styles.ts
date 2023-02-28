import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export type OptionStyleTypeProps = "PRIMARY" | "SECONDARY";

interface OptionStyleProps {
  type: OptionStyleTypeProps;
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<OptionStyleProps>`
  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type, isActive }) =>
    type === "PRIMARY" && isActive
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY" && isActive
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
  border: 1px solid transparent;
  ${({ theme, type, isActive }) =>
    isActive &&
    css`
      border-color: ${type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
    `}

  padding: 16px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  margin-left: 12px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

interface IconProps {
  type: OptionStyleTypeProps;
}

export const Icon = styled.View<IconProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
