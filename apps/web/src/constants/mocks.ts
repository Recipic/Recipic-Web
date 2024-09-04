import { TRecipeCardInfo } from '@/types/recipeCard';
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { TRecipeDetail } from '@/types/recipe';
import { TComment } from '@/types/comments';

//TODO: 목데이터. 추후 삭제 예정
export const pickedRecipeInfosListData: TRecipeCardInfo[] = [
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '스타벅스',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '요아정',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '서브웨이',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
  {
    recipeId: 1,
    userNickName: 'user456',
    title: '스타벅스 꿀조합 슈렉 프라푸치노오오오오오옹!!',
    brandName: '스타벅스',
    isCelebrity: true,
    createdAt: '2024-08-21T12:34:56',
    thumbnailUrl: MockThumbnail,
    description:
      '날씨가 참 더운데 쌉쌀한 말차에 달콤한 초코가 조합이 된 슈렉 프라푸치노를 만들어봤어요! 맛있게 먹어보세요!',
    scrapCount: 85,
    commentCount: 16,
    status: '1',
    userProfileImageUrl: MockThumbnail,
  },
];

//TODO: 목데이터
export const recipeDetailData: TRecipeDetail = {
  recipeId: 3,
  userNickName: '먹부림 사냥꾼',
  userProfileImageUrl: null,
  brandName: '요아정',
  title: '요아정 꿀조합!! 딸기바나나',
  description:
    '이렇게 선택해서 먹으면 기분이 좋그든요이렇게 선택해서 먹으면 기분이 좋그든요이렇게 선택해서 먹으면 기분이 좋그든요이렇게 선택해서 먹으면 기분이 좋그든요이렇게 선택해서 먹으면 기분이 좋그든요',
  thunbnailUrl: MockThumbnail,
  isCelebrity: false,
  createdAt: '2024-08-24T10:41:47.000Z',
  status: '1',
  scrapCount: 10,
  isScrapped: false,
  includeIngredients: [
    {
      ingredient: {
        ingredientId: '1',
        ingredientName: '딸기',
        quantity: 0.5,
        unit: '개',
        cost: 300,
        calorie: 30,
      },
      count: 2,
    },
    {
      ingredient: {
        ingredientId: '2',
        ingredientName: '바나나',
        quantity: 1,
        unit: '개',
        cost: 500,
        calorie: 90,
      },
      count: 1,
    },
    {
      ingredient: {
        ingredientId: '3',
        ingredientName: '초코',
        quantity: 30,
        unit: 'g',
        cost: 200,
        calorie: 120,
      },
      count: 3,
    },
    {
      ingredient: {
        ingredientId: '4',
        ingredientName: '말차',
        quantity: 1,
        unit: '스쿱',
        cost: 150,
        calorie: 20,
      },
      count: 10,
    },
    {
      ingredient: {
        ingredientId: '5',
        ingredientName: '할라피뇨',
        quantity: 0.5,
        unit: '조각',
        cost: 100,
        calorie: 5,
      },
      count: 4,
    },
    {
      ingredient: {
        ingredientId: '6',
        ingredientName: '홍차',
        quantity: 1,
        unit: '티백',
        cost: 200,
        calorie: 0,
      },
      count: 8,
    },
  ],
};

//TODO: 목데이터
export const commentsData: TComment[] = [
  {
    commentId: '1',
    content: '정말 맛있어 보이네요!',
    createdAt: '2024-08-27T02:11:19.740Z',
    userId: 1,
    userProfileImageUrl: null,
    userNickName: '맛있는 레시피',
    recipeTitle: '요아정의 레시피',
    recipeId: 1,
    likeCount: 50000,
    isLiked: false,
  },
  {
    commentId: '2',
    content: '꼭 따라해볼게요!',
    createdAt: '2023-08-26T15:30:00.000Z',
    userId: 2,
    userProfileImageUrl: MockThumbnail,
    userNickName: '요리초보',
    recipeTitle: '요아정의 레시피',
    recipeId: 1,
    likeCount: 2,
    isLiked: true,
  },
];
