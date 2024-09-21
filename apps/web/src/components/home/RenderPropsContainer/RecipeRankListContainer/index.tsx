import React from 'react';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';

interface Props {
  render: (recipeRankListData: TGetRecipeRankListResponse) => React.ReactNode;
}

export function RecipeRankListContainer({ render }: Props) {
  const { recipeRankListData } = useGetRecipeRankList();

  return <>{render(recipeRankListData)}</>;
}
