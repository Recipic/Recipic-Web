import { TRecipeCardInfo } from '@/types/recipeCard';
import MockThumbnail from '@/assets/images/mockBanner.webp';
import { TIngredient, TRecipeDetail } from '@/types/recipe';
import { TComment } from '@/types/comments';
import { TIngredientGroup } from '@/types/dislikeIngredients';
import { TNoticeDetail, TNoticeList } from '@/types/notice';

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
        ingredientId: 1,
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
        ingredientId: 2,
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
        ingredientId: 3,
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
        ingredientId: 4,
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
        ingredientId: 5,
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
        ingredientId: 6,
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
    commentId: 1,
    content: '정말 맛있어 보이네요!',
    createdAt: '2024-08-27T02:11:19.740Z',
    userId: 1,
    userProfileImageUrl: null,
    userNickName: '맛있는 레시피',
    likeCount: 50000,
    liked: false,
    myComment: false,
  },
  {
    commentId: 2,
    content: '꼭 따라해볼게요!',
    createdAt: '2023-08-26T15:30:00.000Z',
    userId: 2,
    userProfileImageUrl: MockThumbnail,
    userNickName: '요리초보',
    likeCount: 2,
    liked: true,
    myComment: true,
  },
];

// TODO: 목데이터
export const ingredientGroups: TIngredientGroup[] = [
  {
    groupName: '과일',
    ingredients: [
      { ingredientName: '파인애플', ingredientId: 1 },
      { ingredientName: '블루베리', ingredientId: 2 },
      { ingredientName: '딸기', ingredientId: 3 },
      { ingredientName: '자몽', ingredientId: 4 },
      { ingredientName: '멜론', ingredientId: 5 },
    ],
  },
  {
    groupName: '야채',
    ingredients: [
      { ingredientName: '양상추', ingredientId: 6 },
      { ingredientName: '토마토', ingredientId: 7 },
      { ingredientName: '오이', ingredientId: 8 },
      { ingredientName: '피망', ingredientId: 9 },
      { ingredientName: '양파', ingredientId: 10 },
      { ingredientName: '아보카도', ingredientId: 11 },
      { ingredientName: '레드페퍼', ingredientId: 12 },
      { ingredientName: '할라피뇨', ingredientId: 13 },
      { ingredientName: '올리브', ingredientId: 14 },
    ],
  },
  {
    groupName: '육류',
    ingredients: [
      { ingredientName: '베이컨', ingredientId: 15 },
      { ingredientName: '치킨', ingredientId: 16 },
      { ingredientName: '칠리', ingredientId: 17 },
      { ingredientName: '터키', ingredientId: 18 },
      { ingredientName: '햄', ingredientId: 19 },
      { ingredientName: '페퍼로니', ingredientId: 20 },
    ],
  },
  {
    groupName: '유제품',
    ingredients: [
      { ingredientName: '치즈', ingredientId: 21 },
      { ingredientName: '우유', ingredientId: 22 },
      { ingredientName: '아이스크림', ingredientId: 23 },
    ],
  },
  {
    groupName: '향신료',
    ingredients: [
      { ingredientName: '후추', ingredientId: 24 },
      { ingredientName: '계피', ingredientId: 25 },
      { ingredientName: '페퍼로치노', ingredientId: 26 },
    ],
  },
  {
    groupName: '기타',
    ingredients: [
      { ingredientName: '초콜릿', ingredientId: 27 },
      { ingredientName: '그라놀라', ingredientId: 28 },
      { ingredientName: '꿀', ingredientId: 29 },
      { ingredientName: '시리얼', ingredientId: 30 },
      { ingredientName: '슈팅캔디', ingredientId: 31 },
      { ingredientName: '아몬드', ingredientId: 32 },
    ],
  },
];

export const ingredientsOptions: TIngredient[] = [
  {
    ingredientId: 1,
    ingredientName: '자바칩',
    quantity: 1,
    unit: '개',
    calorie: 45.6,
    cost: 600,
  },
  {
    ingredientId: 2,
    ingredientName: '초코 드리즐',
    quantity: 10,
    unit: 'g',
    calorie: 45.6,
    cost: 600,
  },
];

export const userEditProfileData = {
  userProfileImageSrc: undefined,
  nickname: '닉네임asfasdf',
  introduction: undefined,
};

//TODO: 목데이터
export const noticeListData: TNoticeList[] = [
  {
    title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
    createdAt: '2024.09.05',
    noticeId: 1,
  },
  {
    title: '[공지] 서비스 점검 안내입니다. (09/02, 00:00~06:00)',
    createdAt: '2024.09.02',
    noticeId: 2,
  },
  {
    title: '[공지] Recipic 서비스 이용약관 등 2건이 개정될 예정이에요.',
    createdAt: '2024.09.01',
    noticeId: 3,
  },
  {
    title: '[공지] 문화체육관광부의 한국문화예술위원회에서 전하는 문화누리카드/청년문화예술패스 거래 금지 안내',
    createdAt: '2024.08.30',
    noticeId: 4,
  },
  {
    title: '[공지 ]쓰레기 종량제 봉투 판매 금지 주의 안내',
    createdAt: '2024.08.22',
    noticeId: 5,
  },
  {
    title: '[공지] 욕설, 음란 게시물 등에 대한 고소 절차 진행 안내',
    createdAt: '2024.08.12',
    noticeId: 6,
  },
  {
    title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
    createdAt: '2024.08.09',
    noticeId: 7,
  },
];

//공지사항 상세 목데이터
export const noticeDetailData: TNoticeDetail = {
  title: '[공지] 보이스피싱 피해 예방과 주의 당부 안내',
  createdAt: '2024.09.05',
  content:
    '안녕하세요, 회원 여러분!\n최근 보이스피싱 사건이 증가함에 따라 주의를 당부드립니다.\n특히, 은행이나 공공기관을 사칭하여 개인정보 및 금융정보를 요구하는 전화에 각별히 유의해주시기 바랍니다.\n의심되는 전화는 바로 끊고, 해당 기관에 직접 확인하는 습관을 기르시길 바랍니다.\n여러분의 안전한 정보 관리를 위해 늘 주의를 기울여 주시기를 부탁드립니다. 감사합니다.안녕하세요, 회원 여러분!\n최근 보이스피싱 사건이 증가함에 따라 주의를 당부드립니다.\n특히, 은행이나 공공기관을 사칭하여 개인정보 및 금융정보를 요구하는 전화에 각별히 유의해주시기 바랍니다.\n의심되는 전화는 바로 끊고, 해당 기관에 직접 확인하는 습관을 기르시길 바랍니다.\n여러분의 안전한 정보 관리를 위해 늘 주의를 기울여 주시기를 부탁드립니다. 감사합니다.',
};
