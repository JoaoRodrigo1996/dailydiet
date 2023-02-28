import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./GroupStorageDTO";

export async function createDiet(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await getAllMeals();

    const mealsAlreadyExist = storedMeals.filter(
      (meal) => meal.name === newMeal.name
    );

    if (mealsAlreadyExist.length > 0) {
      throw new AppError("Essa refeição já foi adicionada na sua dieta.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
