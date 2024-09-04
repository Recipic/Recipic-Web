import React from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header, PageLayout, TopNavBar } from '@recipic-packages/ui';
import { Form, FormField, FormItem, FormLabel } from '@recipic-packages/ui';
import { CheckboxWithLabel } from '@/components/common/CheckboxWithLabel';
import { ingredientGroups } from '@/constants/mocks';
import { BottomFixedButtonWithGradientDiv } from '@/components/common/Buttons/BottomFixedButtonWithGradientDiv';
import { TIngredient, TIngredientGroup } from '@/types/dislikeIngredients';

const formSchema = z.object({
  dislikes: z.array(z.number()),
});

type FormValues = z.infer<typeof formSchema>;

type TIngredientCheckboxProps = {
  ingredient: TIngredient;
  field: ControllerRenderProps<FormValues, 'dislikes'>;
};

function IngredientCheckbox({ ingredient, field }: TIngredientCheckboxProps) {
  const isChecked = field.value.includes(ingredient.ingredientId);

  const handleCheckboxChange = (checked: boolean) => {
    const updatedValue = checked
      ? [...(field.value || []), ingredient.ingredientId]
      : field.value?.filter((value: number) => value !== ingredient.ingredientId);
    field.onChange(updatedValue);
  };

  return (
    <CheckboxWithLabel checked={isChecked} onCheckedChange={handleCheckboxChange} label={ingredient.ingredientName} />
  );
}

type TIngredientGroupProps = {
  group: TIngredientGroup;
  field: ControllerRenderProps<FormValues, 'dislikes'>;
};

function IngredientGroup({ group, field }: TIngredientGroupProps) {
  return (
    <div key={group.groupName}>
      <FormLabel>{group.groupName}</FormLabel>
      <div className="grid grid-cols-3 gap-5 mt-2">
        {group.ingredients.map((ingredient: TIngredient) => (
          <IngredientCheckbox key={ingredient.ingredientId} ingredient={ingredient} field={field} />
        ))}
      </div>
    </div>
  );
}

type TIngredientListProps = {
  field: ControllerRenderProps<FormValues, 'dislikes'>;
};

function IngredientList({ field }: TIngredientListProps) {
  return (
    <div className="space-y-10">
      {ingredientGroups.map((group: TIngredientGroup) => (
        <IngredientGroup key={group.groupName} group={group} field={field} />
      ))}
    </div>
  );
}

export default function DislikeIngredients() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dislikes: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    // TODO: API 연동 필요
    console.log('선택된 싫어하는 재료 ID:', data.dislikes);
  };

  return (
    <PageLayout isBottomSpace isHeaderVisible isTopNavBarVisible>
      <Header title="싫어하는 재료" order="second" />
      <TopNavBar order="first" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-grow overflow-y-auto px-4 py-2 pb-20">
          <FormField
            control={form.control}
            name="dislikes"
            render={({ field }) => (
              <FormItem>
                <IngredientList field={field} />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <BottomFixedButtonWithGradientDiv buttonText="등록하기" onClick={form.handleSubmit(onSubmit)} />
    </PageLayout>
  );
}
