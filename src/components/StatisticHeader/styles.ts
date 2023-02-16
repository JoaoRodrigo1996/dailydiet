import styled, { css } from "styled-components/native";

interface StatisticHeaderStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled.View<StatisticHeaderStyleProps>`
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  padding: 24px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2xl"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
