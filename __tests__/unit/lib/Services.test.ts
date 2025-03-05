import mockAxios from "../../../jest.setup";
import Services from "@/lib/Services";

describe("Services", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should make a GET request without token", async () => {
    const url = "/test-get";
    const params = { param: "value" };
    const responseData = { data: "get response" };

    mockAxios.onGet(url, { params }).reply(200, responseData);

    const response = await Services.get(url, params);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });
});