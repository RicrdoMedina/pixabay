import axios, { AxiosResponse, AxiosInstance } from 'axios';
import type { ApiClient } from './api-client';

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export { axiosInstance };

export const HttpClient: ApiClient = {
  get: (url: string) => axiosInstance.get(url).then((r: AxiosResponse) => r),
  post: <T = unknown>(url: string, data?: any, config?: any) =>
    axiosInstance.post<T>(url, data, config).then((r: AxiosResponse<T>) => r),
  patch: (url: string, data: any) =>
    axiosInstance.patch(url, data).then((r: AxiosResponse) => r),
  put: (url: string, data: any) =>
    axiosInstance.put(url, data).then((r: AxiosResponse) => r),
  delete: (url: string) =>
    axiosInstance.delete(url).then((r: AxiosResponse) => r),
};