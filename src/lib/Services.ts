import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";
const API_URL = process.env.SERVER_API_URL;

export default class Services {
  static api: AxiosInstance = axios.create({
    baseURL: API_URL,
    // withCredentials: true,
    // timeout: 60000,
  });

  static get(url: string, data: any, token?: string): AxiosPromise {
    const payload = data ? data : {};
    const requestConfig: AxiosRequestConfig = token
      ? {
          url: `${url}`,
          headers: { Authorization: `Bearer ${token}` },
          method: "get",
          data: payload,
        }
      : {
          url: `${url}`,
          method: "get",
          data: payload,
        };

    return this.api(requestConfig);
  }

  static auth(url: string, username: string, password: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = {
      url: `${url}`,
      method: "post",
      auth: {
        password,
        username,
      },
    };
    return this.api(requestConfig);
  }

  static post(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = token
      ? {
          url: `${url}`,
          headers: { Authorization: `Bearer ${token}` },
          method: "post",
          data,
        }
      : {
          url: `${url}`,
          method: "post",
          data,
        };

    return this.api(requestConfig);
  }

  static patch(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = token
      ? {
          url: `${url}`,
          headers: { Authorization: `Bearer ${token}` },
          method: "patch",
          data,
        }
      : {
          url: `${url}`,
          method: "patch",
          data,
        };

    return this.api(requestConfig);
  }

  static put(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = token
      ? {
          url: `${url}`,
          headers: { Authorization: `Bearer ${token}` },
          method: "put",
          data,
        }
      : {
          url: `${url}`,
          method: "put",
          data,
        };

    return this.api(requestConfig);
  }

  static delete(url: string, data: any, token?: string): AxiosPromise {
    const requestConfig: AxiosRequestConfig = token
      ? {
          url: `${url}`,
          headers: { Authorization: `Bearer ${token}` },
          method: "delete",
          data,
        }
      : {
          url: `${url}`,
          method: "delete",
          data,
        };

    return this.api(requestConfig);
  }
}
