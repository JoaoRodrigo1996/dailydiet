import styled, { css } from "styled-components/native";

interface HeaderStylesProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled.View<HeaderStylesProps>`
  flex-direction: row;

  height: 104px;
  justify-content: space-between;
  padding: 24px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
