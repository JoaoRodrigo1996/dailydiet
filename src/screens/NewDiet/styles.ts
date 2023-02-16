import { ArrowLeft } from "phosphor-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View`
  width: 100%;
  height: 132px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const BackButton = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;

export const Content = styled(ScrollView).attrs(({ theme }) => ({}))`
  flex: 1;
  margin-top: -32px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 24px;
`;

export const Form = styled.View`
  margin-top: 40px;
`;

export const InputContainer = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 4px;
`;

export const InputText = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  height: 48px;
  padding: 16px;
  border-radius: 8px;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const DateContainer = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const TimeContainer = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;
