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
});

instance.interceptors.request.use(
  (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN}`; // TODO: 테스트용 코드입니다.
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

      try {
        const response: AxiosResponse<TAuthResponse, TReissueRequestData> = await instance.post('/auth/reissue', {
          accessToken: import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN, // TODO: 테스트용 코드입니다.
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
