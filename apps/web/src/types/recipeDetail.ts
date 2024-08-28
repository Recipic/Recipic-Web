/*
수정해야할 사항
recipeId -> recipeName
userId -> userName
brandId -> brandName
ingredientId -> ingredientName
*/
export type getRecipeDetailResponse = {
  recipeId: string;
  userId: string;
  brandId: string;
  title: string;
  description: string;
  imageUrl: string;
  isCelebrity: string; // "false"가 문자열로 되어 있으므로 boolean 대신 string 사용
  createdAt: string;
  status: string;
  scrapCount: number;
  comments: Comment[];
  includeIngredients: Ingredient[];
};

export type Comment = {
  commentId: string;
  userId: string;
  content: string;
  createdAt: string;
  likeCount: number;
};

export type Ingredient = {
  count: number;
};
