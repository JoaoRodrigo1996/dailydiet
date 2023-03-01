import { ArrowLeft } from "phosphor-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Header = styled.View`
  width: 100%;
  height: 132px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
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

export const DateTimeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const OptionContainer = styled.View`
  flex-direction: row;
`;
