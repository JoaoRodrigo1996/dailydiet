import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "../screens/EditMeal";
import { FailedFeedback } from "../screens/FailedFeedback";
import { Home } from "../screens/Home";
import { Meal } from "../screens/Meal";
import { NewMeal } from "../screens/NewMeal";
import { Statistic } from "../screens/Statistic";
import { SuccessFeedback } from "../screens/SuccessFeedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="new" component={NewMeal} />
      <Screen name="successfeedback" component={SuccessFeedback} />
      <Screen name="failedfeedback" component={FailedFeedback} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  );
}
