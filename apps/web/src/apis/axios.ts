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
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
    const accessToken = localStorage.getItem('accessToken');
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
    console.error('Response Error:', error); // 디버깅용
    console.log('Error Response:', error.response); // 디버깅용
    console.log('Error Config:', error.config); // 디버깅용
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response: AxiosResponse<TAuthResponse, TReissueRequestData> = await instance.post('/auth/reissue', {
        accessToken: accessToken,
      });

      if (response.status !== 200) {
        return Promise.reject(error);
      }

      const newAccessToken = response.data.accessToken;

      localStorage.setItem('accessToken', newAccessToken);

      if (originalRequest.headers) {
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
      }

      return instance(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem('accessToken');
      window.location.href = '/';
      return Promise.reject(refreshError);
    }
  },
);
