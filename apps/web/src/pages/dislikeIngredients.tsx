import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header, PageLayout, TopNavBar, Button } from '@recipic-packages/ui';
import { Form, FormField, FormItem, FormLabel } from '@recipic-packages/ui';
import { CheckboxWithLabel } from '@/components/common/CheckboxWithLabel';

const formSchema = z.object({
  dislikes: z.array(z.string()).min(1, '최소 한 개 이상의 재료를 선택해주세요.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function DislikeIngredients() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dislikes: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    //TODO: api 연동 필요
    console.log('선택된 싫어하는 재료:', data.dislikes);
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
            render={() => (
              <FormItem>
                <div className="space-y-10">
                  {ingredientGroups.map(group => (
                    <div key={group.groupName}>
                      <FormLabel>{group.groupName}</FormLabel>
                      <div className="grid grid-cols-3 gap-5 mt-2">
                        {group.items.map(ingredient => (
                          <FormField
                            key={ingredient}
                            control={form.control}
                            name="dislikes"
                            render={({ field }) => (
                              <CheckboxWithLabel
                                checked={field.value?.includes(ingredient)}
                                onCheckedChange={(checked: boolean) => {
                                  const updatedValue = checked
                                    ? [...field.value, ingredient]
                                    : field.value?.filter(value => value !== ingredient);
                                  field.onChange(updatedValue);
                                }}
                                label={ingredient}
                              />
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white max-w-lg mx-auto">
        <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>
          등록하기
        </Button>
      </div>
    </PageLayout>
  );
}

// 목데이터
const ingredientGroups = [
  {
    groupName: '과일',
    items: ['파인애플', '블루베리', '딸기', '자몽', '멜론'],
  },
  {
    groupName: '야채',
    items: ['양상추', '토마토', '오이', '피망', '양파', '아보카도', '레드페퍼', '할라피뇨', '올리브'],
  },
  {
    groupName: '육류',
    items: ['베이컨', '치킨', '칠리', '터키', '햄', '페퍼로니'],
  },
  {
    groupName: '유제품',
    items: ['치즈', '우유', '아이스크림'],
  },
  {
    groupName: '향신료',
    items: ['후추', '계피', '페퍼로치노'],
  },
  {
    groupName: '기타',
    items: ['초콜릿', '그라놀라', '꿀', '시리얼', '슈팅캔디', '아몬드'],
  },
];
