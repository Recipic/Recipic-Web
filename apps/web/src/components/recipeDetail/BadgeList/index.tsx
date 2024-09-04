import { TIncludeIngredient } from '@/types/recipe';
import { Badge } from '@recipic-packages/ui';
import React from 'react';

type TBadgeListProps = {
  includeIngredients: TIncludeIngredient[];
};

export default function BadgeList({ includeIngredients }: TBadgeListProps) {
  return (
    <>
      {includeIngredients.map((ingredient: TIncludeIngredient) => (
        <Badge key={ingredient.ingredient.ingredientId} variant="default">
          {`${ingredient.ingredient.ingredientName} ${ingredient.ingredient.quantity}${ingredient.ingredient.unit} x ${ingredient.count}`}
        </Badge>
      ))}
    </>
  );
}
