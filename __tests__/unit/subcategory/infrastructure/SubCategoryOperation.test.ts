import { fetchAllSubCategoryItems } from '@/subcategory/infrastructure/SubCategoryOperation';
import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';
import { subCategoryData } from '@/mocks/dummyData/subCategoryData';

describe('SubCategoryOperation.ts', () => {
	let mockHttp: { get: jest.Mock };

	beforeEach(() => {
		mockHttp = { get: jest.fn() };
	});

	test('should get subcategories correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		mockHttp.get.mockResolvedValue({
			status: 200,
			data: { data: mockSubCategoryItems },
		});

		const getSubCategoryItems = fetchAllSubCategoryItems(mockHttp);
		const result = await getSubCategoryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockHttp.get).toHaveBeenCalledWith('/subcategory');
		expect(result).toEqual(mockSubCategoryItems);
	});

	test('should handle errors if API fails', async () => {
		mockHttp.get.mockRejectedValue(new Error('API Error'));

		const getSubCategoryItems = fetchAllSubCategoryItems(mockHttp);

		const result = await getSubCategoryItems();

    expect(mockHttp.get).toHaveBeenCalledTimes(1)
    expect(result).toEqual([]);
	});

  test('should handle non-200 API Responses', async () => {
    mockHttp.get.mockResolvedValue({
			status: 500,
			statusText: "Internal Server Error"
		});

    const getSubCategoryItems = fetchAllSubCategoryItems(mockHttp);

		const result = await getSubCategoryItems();

    expect(mockHttp.get).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  })
});
