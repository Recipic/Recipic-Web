import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { useCookies } from 'react-cookie';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

type TReissueRequestData = {
  refreshToken: string;
};

type TAuthResponse = {
  accessToken: string;
};

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN}`,
  },
  withCredentials: true, // 쿠키 사용을 위한 설정
});

// 쿠키를 사용하기 위한 hook (react-cookie의 useCookies 사용)
export const useAxiosWithReissue = () => {
  const [cookies] = useCookies(['refreshToken']); // 쿠키에서 refreshToken 가져오기

  instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
      const accessToken = import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN; // 테스트용 엑세스 토큰
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error: AxiosError): Promise<AxiosResponse> => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      // 401 Unauthorized 처리
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = cookies.refreshToken; // react-cookie에서 refreshToken 가져오기
          if (!refreshToken) {
            return Promise.reject(error); // 리프레시 토큰이 없다면 에러 처리
          }

          // 새로운 엑세스 토큰 요청
          const response: AxiosResponse<TAuthResponse, TReissueRequestData> = await instance.post('/auth/reissue', {
            refreshToken: refreshToken, // 리프레시 토큰 사용
          });

          // 새로운 엑세스 토큰 발급
          if (response.status === 200) {
            const newAccessToken = response.data.accessToken;

            // 새로운 엑세스 토큰 설정
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            }

            // 실패한 요청 재시도
            return instance(originalRequest);
          }
        } catch (refreshError) {
          // 토큰 재발급 실패 시 에러 반환
          return Promise.reject(refreshError);
        }
      }

      // 다른 에러 처리
      return Promise.reject(error);
    },
  );

  return instance;
};
