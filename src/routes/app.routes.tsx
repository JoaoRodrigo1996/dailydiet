import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "../screens/Feedback";
import { Home } from "../screens/Home";
import { NewDiet } from "../screens/NewDiet";
import { Statistic } from "../screens/Statistic";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="new" component={NewDiet} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}