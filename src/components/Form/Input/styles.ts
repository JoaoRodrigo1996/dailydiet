import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 24px;
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 4px;
`;

export const InputText = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  height: 48px;
  padding: 16px;
  border-radius: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
