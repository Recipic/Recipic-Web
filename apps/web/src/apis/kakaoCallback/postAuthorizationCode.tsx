import { instance } from '@/apis/axios';
import { TPostAuthorizationCodeBody, TPostAuthorizationCodeResponse } from './type';

export const postAuthorizationCode = async ({
  authorizationCode,
}: TPostAuthorizationCodeBody): Promise<TPostAuthorizationCodeResponse> => {
  const response = await instance.post<TPostAuthorizationCodeResponse>(`/api/auth/kakao`, {
    authorizationCode: authorizationCode,
  });
  return response.data;
};
