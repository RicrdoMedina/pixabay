// tslint:disable: no-any
import axios, { AxiosInstance, AxiosResponse } from "axios";
const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`;

export default class Http {
  static http: AxiosInstance = axios.create({
    baseURL: API_URL,
    // timeout: 60000,
  });

  static get(url: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .get(url)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static post<JSON = unknown>(
    url: string,
    data?: any,
    auth?: any
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .post(url, data, auth)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static patch(url: string, data: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .patch(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static put(url: string, data: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .put(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(url: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .delete(url)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
