import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface StatisticStyleProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView)<StatisticStyleProps>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;

  margin-top: -32px;
  padding: 32px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 24px;
  text-align: center;
`;

export const Sequence = styled.View`
  align-items: center;

  width: 100%;

  margin-bottom: 12px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
`;

export const Text = styled.Text`
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

export const Data = styled.View`
  align-items: center;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: center;
`;
