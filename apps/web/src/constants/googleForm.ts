export type TGoogleFormConfig = {
  id: string;
  title: string;
  description?: string;
};

export const GOOGLE_FORMS: Record<string, TGoogleFormConfig> = {
  '1': {
    id: 'google-form-id-1',
    title: '레시픽 설문조사',
    description: '더 나은 서비스를 위한 설문조사입니다.',
  },
};
