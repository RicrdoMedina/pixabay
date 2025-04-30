// Services.test.ts
import Services from '@/lib/services';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

describe('Services', () => {
  const mockResponse = {
    data: { ok: true },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  } as AxiosResponse;

  let apiSpy: jest.SpyInstance<Promise<AxiosResponse>, [AxiosRequestConfig]>;

  beforeAll(() => {
    apiSpy = jest.spyOn(Services, 'api') as any;
  });

  beforeEach(() => {
    apiSpy.mockClear();
    apiSpy.mockResolvedValue(mockResponse);
  });

  test('should call get with params and Authorization header when token is provided', async () => {
    const url = '/endpoint';
    const params = { q: 'test' };
    const token = 'my-token';

    const res = await Services.get(url, params, token);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'get',
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call get without headers when no token is provided', async () => {
    const url = '/endpoint';
    const params = { page: 2 };

    await Services.get(url, params);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'get',
      params,
    });
  });

  test('should call auth with basic auth config', async () => {
    const url = '/login';
    const username = 'user1';
    const password = 'pass1';

    const res = await Services.auth(url, username, password);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'post',
      auth: { username, password },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call post with data and header when token provided', async () => {
    const url = '/items';
    const data = { name: 'foo' };
    const token = 'token123';

    const res = await Services.post(url, data, token);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'post',
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call post without header when no token provided', async () => {
    const url = '/items';
    const data = { name: 'bar' };

    await Services.post(url, data);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'post',
      data,
    });
  });

  test('should call patch with data and header when token provided', async () => {
    const url = '/items/1';
    const data = { name: 'updated' };
    const token = 'tok-xyz';

    const res = await Services.patch(url, data, token);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'patch',
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call put with data and header when token provided', async () => {
    const url = '/items/1';
    const data = { name: 'replaced' };
    const token = 'tok-abc';

    const res = await Services.put(url, data, token);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'put',
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call delete with data and header when token provided', async () => {
    const url = '/items/1';
    const data = { soft: true };
    const token = 'del-token';

    const res = await Services.delete(url, data, token);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'delete',
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res).toBe(mockResponse);
  });

  test('should call delete without header when no token provided', async () => {
    const url = '/items/2';
    const data = { soft: false };

    await Services.delete(url, data);

    expect(apiSpy).toHaveBeenCalledWith({
      url,
      method: 'delete',
      data,
    });
  });
});
