import { useAuth } from '@/contexts/auth/authProvider';
import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

type TReissueRequestData = {
  accessToken: string;
};

type TAuthResponse = {
  accessToken: string;
};

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
    const { accessToken } = useAuth(); // TODO: 실제 서비스에서는 이 코드를 사용합니다.
    if (config.headers) {
      //config.headers['Authorization'] = `Bearer ${accessToken}`; // TODO: 실제 서비스에서는 이 코드를 사용합니다.
      config.headers['Authorization'] = `Bearer ${import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN as string}`; // TODO: 테스트용 코드입니다.
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
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { accessToken } = useAuth();

      try {
        const response: AxiosResponse<TAuthResponse, TReissueRequestData> = await instance.post('/auth/reissue', {
          accessToken: accessToken,
        });

        if (response.status === 200) {
          const newAccessToken = response.data.accessToken;
          if (originalRequest.headers) {
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          }
          return instance(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
