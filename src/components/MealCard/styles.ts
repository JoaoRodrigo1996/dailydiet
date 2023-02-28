import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type MealCardStyleStatusProps = "PRIMARY" | "SECONDARY";

export const Container = styled(TouchableOpacity)`
  width: 100%;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 16px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_400};
    background-color: ${theme.COLORS.GRAY_400};
  `}
  height: 14px;
`;

export const Time = styled.Text`
  margin-right: 12px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled(Text).attrs(({ ellipsizeMode, numberOfLines }) => ({
  numberOfLines: 1,
  ellipsizeMode: "tail",
}))`
  margin-left: 12px;
  width: 75%;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

interface StatusProps {
  status: MealCardStyleStatusProps;
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 9999px;

  background-color: ${({ theme, status }) =>
    status === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
