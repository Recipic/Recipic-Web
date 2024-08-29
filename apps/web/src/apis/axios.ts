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

const getAccessToken = (): string => {
  //return import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN;

  //TODO: 발표를 위해 임시로 주석처리
  // if (import.meta.env.MODE === 'development') {
  //   return import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN;
  // }

  // //TODO: 추후 context로 수정할 예정
  const storedToken = localStorage.getItem('accessToken');
  if (storedToken) {
    return storedToken;
  } else {
    return import.meta.env.VITE_APP_SUPER_ACCESS_TOKEN;
  }

  // return '';
};

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
  withCredentials: true,
});

export const useAxiosWithReissue = () => {
  const [cookies] = useCookies(['refreshToken']);

  instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
      const accessToken = getAccessToken();
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

      if (error.response?.status !== 401 || originalRequest._retry) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const refreshToken = cookies.refreshToken;
        if (!refreshToken) {
          return Promise.reject(error);
        }

        const response: AxiosResponse<TAuthResponse, TReissueRequestData> = await instance.post('/auth/reissue', {
          refreshToken: refreshToken,
        });

        if (response.status !== 200) {
          return Promise.reject(error);
        }

        const newAccessToken = response.data.accessToken;

        if (import.meta.env.MODE !== 'development') {
          localStorage.setItem('accessToken', newAccessToken);
        }

        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }

        return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    },
  );

  return instance;
};
