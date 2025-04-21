export interface ApiClient {
  get: (url: string) => Promise<any>;
  post: <T = unknown>(url: string, data?: any, config?: any) => Promise<any>;
  patch?: (url: string, data: any) => Promise<any>;
  put?: (url: string, data: any) => Promise<any>;
  delete?: (url: string) => Promise<any>;
 
  //query?: (query: string, variables?: Record<string, any>) => Promise<any>;
}