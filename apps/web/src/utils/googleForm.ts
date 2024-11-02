import { GOOGLE_FORMS, type TGoogleFormConfig } from '@/constants/googleForm';

export const getGoogleFormUrl = (formId: string): string | null => {
  const form = GOOGLE_FORMS[formId];
  if (!form) {
    return null;
  }
  return `https://docs.google.com/forms/d/e/${form.id}/viewform?embedded=true`;
};

export const getGoogleFormConfig = (formId: string): TGoogleFormConfig | null => {
  return GOOGLE_FORMS[formId] || null;
};
