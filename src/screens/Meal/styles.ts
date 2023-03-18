import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

interface MealContainerStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView) <MealContainerStyleProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -32px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 40px 24px;

  justify-content: space-between;
`;

export const MealInfo = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 8px;
`;

export const DateAndTime = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DayAndHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Status = styled.View`
  margin-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 1000px;
  width: 144px;
  height: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View<MealContainerStyleProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 9999px;
  margin-right: 8px;
`;

export const MealStatus = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Actions = styled.View``;

export const ModalView = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.25);

  align-items: center;
  justify-content: center;
  
`;

export const CenteredModalView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
  width: 327px;
  border-radius: 8px;
`

export const ModalText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100}
  `}
`

export const ModalButton = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`