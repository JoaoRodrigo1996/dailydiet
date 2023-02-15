import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
  weight: "bold",
}))`
  margin-right: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
