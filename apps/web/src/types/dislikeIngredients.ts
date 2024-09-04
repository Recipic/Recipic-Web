export type TIngredient = {
  ingredientName: string;
  ingredientId: number;
};

export type TIngredientGroup = {
  groupName: string;
  ingredients: TIngredient[];
};
