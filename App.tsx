import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "./src/components/Loading";

import { Feedback } from "./src/screens/Feedback";

import theme from "./src/theme";

export default function App() {
  const [isFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {isFontsLoaded ? <Feedback /> : <Loading />}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
