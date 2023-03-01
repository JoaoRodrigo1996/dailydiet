export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: {
        totalMeals: number;
        totalMealsOnDiet: number;
        totalMealsOffDiet: number;
        consecutivesMealsOnDiet: number;
        percentDietMeals: number;
      };
      new: undefined;
      successfeedback: undefined;
      failedfeedback: undefined;
      meal: {
        name: string;
      };
      edit: {
        mealName: string;
      };
    }
  }
}
