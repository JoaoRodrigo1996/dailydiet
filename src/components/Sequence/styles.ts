import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;

  width: 100%;

  margin-bottom: 12px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
