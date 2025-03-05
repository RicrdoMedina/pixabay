import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";

const API_URL = process.env.SERVER_API_URL;

export default class Services {
  static api: AxiosInstance = axios.create({
    baseURL: API_URL,
    // withCredentials: true,
    // timeout: 60000,
  });

  private static _buildRequestConfig(
    method: "get" | "post" | "patch" | "put" | "delete",
    url: string,
    data?: any,
    token?: string
  ): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      url,
      method,
    };

    if (method === "get") {
      config.params = data;
    } else {
      config.data = data;
    }

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  }

  static get(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig = this._buildRequestConfig("get", url, data, token);
    return this.api(requestConfig);
  }

  static auth(url: string, username: string, password: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = {
      url,
      method: "post",
      auth: {
        username,
        password,
      },
    };
    return this.api(requestConfig);
  }

  static post(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig = this._buildRequestConfig("post", url, data, token);
    console.log("Request Config:", requestConfig); 
    return this.api(requestConfig);
  }

  static patch(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig = this._buildRequestConfig("patch", url, data, token);
    return this.api(requestConfig);
  }

  static put(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig = this._buildRequestConfig("put", url, data, token);
    return this.api(requestConfig);
  }

  static delete(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig = this._buildRequestConfig("delete", url, data, token);
    return this.api(requestConfig);
  }
}