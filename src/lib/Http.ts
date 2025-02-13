// src/lib/Http.ts
import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000/api";

export default class Http {
  static http: AxiosInstance = axios.create({
    baseURL: API_URL, // 🔥 Usa el servidor de Next.js
  });

  static get(url: string): Promise<AxiosResponse> {
    return this.http.get(url);
  }

  static post<JSON = unknown>(url: string, data?: any, auth?: any): Promise<AxiosResponse> {
    return this.http.post(url, data, auth);
  }

  static patch(url: string, data: any): Promise<AxiosResponse> {
    return this.http.patch(url, data);
  }

  static put(url: string, data: any): Promise<AxiosResponse> {
    return this.http.put(url, data);
  }

  static delete(url: string): Promise<AxiosResponse> {
    return this.http.delete(url);
  }
}
