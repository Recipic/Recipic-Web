import { instance } from '@/apis/axios';
import { handleApiError } from '@/apis/error';
import { TPostAuthorizationCodeBody, TPostAuthorizationCodeResponse } from './type';

export const postAuthorizationCode = async ({
  authorizationCode,
}: TPostAuthorizationCodeBody): Promise<TPostAuthorizationCodeResponse> => {
  try {
    const response = await instance.post<TPostAuthorizationCodeResponse>(`/api/auth/kakao`, {
      authorizationCode: authorizationCode,
    });
    return response.data;
  } catch (error: unknown) {
    throw handleApiError(error);
  }
};
