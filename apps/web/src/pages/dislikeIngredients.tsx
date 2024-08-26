import { Header, PageLayout, TopNavBar, RadioGroup, RadioGroupItem, Button } from '@recipic-packages/ui';

export default function DislikeIngredients() {
  return (
    <PageLayout>
      <Header title="싫어하는 재료" order="second" />
      <TopNavBar order="first" />
      <div className="flex flex-col items-center px-4 gap-y-6 mt-24 mb-24 overflow-y-auto">
        {ingredientGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="w-full">
            <h3 className="font-semibold mb-4">{group.groupName}</h3>
            <RadioGroup className="grid grid-cols-3 gap-x-8 gap-y-4">
              {group.items.map((ingredient, itemIndex) => (
                <div key={itemIndex} className="flex items-center">
                  <RadioGroupItem value={ingredient} id={`ingredient-${groupIndex}-${itemIndex}`} />
                  <label htmlFor={`ingredient-${groupIndex}-${itemIndex}`} className="ml-2">
                    {ingredient}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
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
  {
    groupName: '기타',
    items: ['초콜릿', '그라놀라', '꿀', '시리얼', '슈팅캔디', '아몬드'],
  },
];
