import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
  flex: 1;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const MealDate = styled.Text`
  margin-top: 32px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
