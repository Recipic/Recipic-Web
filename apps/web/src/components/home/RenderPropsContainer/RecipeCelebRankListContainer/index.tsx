import React from 'react';
import { TGetRecipeRankListResponse } from '@/apis/home/type';
import { useGetRecipeCelebRankList } from '@/hooks/useGetRecipeCelebRankList';

interface Props {
  render: (recipeCelebRankListData: TGetRecipeRankListResponse) => React.ReactNode;
}

export function RecipeCelebRankListContainer({ render }: Props) {
  const { recipeCelebRankListData } = useGetRecipeCelebRankList();

  return <>{render(recipeCelebRankListData)}</>;
}
