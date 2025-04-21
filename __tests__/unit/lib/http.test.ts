import Http from '@/lib/Http';
import mockAxios from '../../../jest.setup';

describe('Http', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should make a GET request', async () => {
    const url = '/test-get';
    const responseData = { data: 'get response' };

    mockAxios.onGet(url).reply(200, responseData);

    const response = await Http.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  test('should make a POST request', async () => {
    const url = '/test-post';
    const postData = { key: 'value' };
    const responseData = { data: 'post response' };

    mockAxios.onPost(url, postData).reply(200, responseData);

    const response = await Http.post(url, postData);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  test('should make a PATCH request', async () => {
    const url = '/test-patch';
    const patchData = { key: 'updated value' };
    const responseData = { data: 'patch response' };

    mockAxios.onPatch(url, patchData).reply(200, responseData);

    const response = await Http.patch(url, patchData);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  test('should make a PUT request', async () => {
    const url = '/test-put';
    const putData = { key: 'new value' };
    const responseData = { data: 'put response' };

    mockAxios.onPut(url, putData).reply(200, responseData);

    const response = await Http.put(url, putData);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  test('should make a DELETE request', async () => {
    const url = '/test-delete';
    const responseData = { data: 'delete response' };

    mockAxios.onDelete(url).reply(200, responseData);

    const response = await Http.delete(url);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });
});