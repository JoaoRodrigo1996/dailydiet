import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function removeMeal(name: string) {
  try {
    const storedMeals = await getAllMeals();

    const filteredMeals = storedMeals.filter((meal) => meal.name !== name);
    const meals = JSON.stringify(filteredMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}
