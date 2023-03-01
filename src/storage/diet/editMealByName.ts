import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealStorageDTO } from "./GroupStorageDTO";

export async function editMealByName(
  originalName: string,
  editedMeal: MealStorageDTO
) {
  try {
    const storedMeals = await getAllMeals();

    const mealAlreadyExist = storedMeals.filter(
      (meal) => meal.name === editedMeal.name
    );

    if (mealAlreadyExist.length > 0) {
      throw new AppError("Refeição já existente na sua dieta.");
    }

    const mealEdited = storedMeals.filter((meal) => {
      if (meal.name === originalName) {
        (meal.name = editedMeal.name),
          (meal.description = editedMeal.description),
          (meal.date = editedMeal.date),
          (meal.time = editedMeal.time),
          (meal.status = editedMeal.status);
      }

      return meal;
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealEdited));
  } catch (error) {
    throw error;
  }
}
