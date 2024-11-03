export type TInstagramConfig = {
  id: string;
  title: string;
  description?: string;
  url: string;
};

export const INSTAGRAM_EMBEDS: Record<string, TInstagramConfig> = {
  '1': {
    id: 'instagram-post-id-1',
    title: '레시픽 인스타그램',
    description: '레시픽 공식 인스타그램입니다.',
    url: 'https://www.instagram.com/recipic_official',
  },
};
