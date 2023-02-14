import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface SummaryStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled(TouchableOpacity)<SummaryStyleProps>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  width: 100%;
  padding: 20px 16px;
  margin-top: 32px;
  border-radius: 8px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2xl"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<SummaryStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: "bold",
  })
)<SummaryStyleProps>`
  margin-left: auto;
`;
