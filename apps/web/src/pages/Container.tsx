import React from 'react';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { useGetRecipeCelebRankList } from '@/hooks/useGetRecipeCelebRankList';
import { useGetRecipeRankList } from '@/hooks/useGetRecipeRankList';

interface Props {
  render: (
    recipeRankListData: TGetRecipeRankListResponse,
    recipeCelebRankListData: TGetRecipeRankListResponse,
  ) => React.ReactNode;
}

export function Container({ render }: Props) {
  const { recipeRankListData } = useGetRecipeRankList();
  const { recipeCelebRankListData } = useGetRecipeCelebRankList();

  return <>{render(recipeRankListData, recipeCelebRankListData)}</>;
}
