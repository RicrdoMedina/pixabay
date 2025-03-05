import { fetchAllCategoryItems } from '@/category/infrastructure/CategoryOperation';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { categoryData } from '@/mocks/dummyData/categoryData';

describe('fetchAllCategoryItems CategoryOperation.ts', () => {
	let mockHttp: { get: jest.Mock };

	beforeEach(() => {
		mockHttp = { get: jest.fn() };
	});

	test('should get categories correctly', async () => {
		const mockCategoryItems: CategoryEntity[] = categoryData;

		mockHttp.get.mockResolvedValue({
			status: 200,
			data: { data: mockCategoryItems },
		});

		const getCategoryItems = fetchAllCategoryItems(mockHttp);

		const result = await getCategoryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockHttp.get).toHaveBeenCalledWith('/category');
		expect(result).toEqual(mockCategoryItems);
	});

	test('should handle errors if the API fails', async () => {
		mockHttp.get.mockRejectedValue(new Error('API Error'));

		const getCategoryItems = fetchAllCategoryItems(mockHttp);
		const result = await getCategoryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});

	test('should handle non-200 API responses', async () => {
		mockHttp.get.mockResolvedValue({
			status: 500,
			statusText: 'Internal Server Error',
		});

		const getCategoryItems = fetchAllCategoryItems(mockHttp);
		const result = await getCategoryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});
});
