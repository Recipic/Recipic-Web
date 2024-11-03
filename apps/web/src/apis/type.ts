import { AxiosError } from 'axios';

export type TGetResponse<T> = {
  success: boolean;
  response: T;
};

export type TServerError = {
  code: string;
  message: string;
  status: number;
};

// 서버에서 오는 에러 응답의 전체 타입
export type TErrorResponse = {
  error: TServerError;
  isSuccess: false;
};

// Axios 에러 타입과 서버 에러 타입을 조합
export type TCustomError = AxiosError<TErrorResponse, void>;
