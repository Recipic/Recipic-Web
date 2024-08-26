import { Header, PageLayout, TopNavBar, RadioGroup, RadioGroupItem, Button } from '@recipic-packages/ui';

export default function DislikeIngredients() {
  return (
    <PageLayout>
      <Header title="싫어하는 재료" order="second" />
      <TopNavBar order="first" />
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
