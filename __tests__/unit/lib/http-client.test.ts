import { HttpClient, axiosInstance } from '@/lib/http-client';
import { AxiosResponse } from 'axios';

describe('HttpClient', () => {
  const mockResponse: AxiosResponse = {
    data: { success: true },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should call axiosInstance.get and return the response', async () => {
    const spy = jest
      .spyOn(axiosInstance, 'get')
      .mockResolvedValue(mockResponse);

    const response = await HttpClient.get('/endpoint');

    expect(spy).toHaveBeenCalledWith('/endpoint');
    expect(response).toBe(mockResponse);
  });

  test('should call axiosInstance.post with data & config and return the response', async () => {
    const payload = { foo: 'bar' };
    const config = { headers: { 'X-Test': 'yes' } };
    const spy = jest
      .spyOn(axiosInstance, 'post')
      .mockResolvedValue(mockResponse);

    const response = await HttpClient.post('/endpoint', payload, config);

    expect(spy).toHaveBeenCalledWith('/endpoint', payload, config);
    expect(response).toBe(mockResponse);
  });

  test('should call axiosInstance.patch with data and return the response', async () => {
    const payload = { foo: 'baz' };
    const spy = jest
      .spyOn(axiosInstance, 'patch')
      .mockResolvedValue(mockResponse);

    const response = await HttpClient.patch('/endpoint', payload);

    expect(spy).toHaveBeenCalledWith('/endpoint', payload);
    expect(response).toBe(mockResponse);
  });

  test('should call axiosInstance.put with data and return the response', async () => {
    const payload = { foo: 'qux' };
    const spy = jest
      .spyOn(axiosInstance, 'put')
      .mockResolvedValue(mockResponse);

    const response = await HttpClient.put('/endpoint', payload);

    expect(spy).toHaveBeenCalledWith('/endpoint', payload);
    expect(response).toBe(mockResponse);
  });

  test('should call axiosInstance.delete and return the response', async () => {
    const spy = jest
      .spyOn(axiosInstance, 'delete')
      .mockResolvedValue(mockResponse);

    const response = await HttpClient.delete('/endpoint');

    expect(spy).toHaveBeenCalledWith('/endpoint');
    expect(response).toBe(mockResponse);
  });
});
