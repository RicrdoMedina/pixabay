import { createHttpCategoryRepository } from '@/category/infrastructure/http-category-repository';
import type { ApiClient } from '@/lib/api-client';
import type { CategoryEntity } from '@/category/domain/category-entity';
import { categoryData } from '@/mocks/dummy-data/category-data';

describe('fetchAllCategoryItems CategoryOperation.ts', () => {
	const mockApi: jest.Mocked<ApiClient> = {
		get: jest.fn(),
		post: jest.fn(),
		patch: jest.fn(),
		put: jest.fn(),
		delete: jest.fn(),
	};

	const repository = createHttpCategoryRepository(mockApi);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should get categories correctly', async () => {
		const mockCategoryItems: CategoryEntity[] = categoryData;

		mockApi.get.mockResolvedValue({
			status: 200,
			data: { data: mockCategoryItems },
		});

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(mockApi.get).toHaveBeenCalledWith('/category');
		expect(result).toEqual(mockCategoryItems);
	});

	test('should handle errors if the API fails', async () => {
		mockApi.get.mockRejectedValue(new Error('API Error'));

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});

	test('should handle non-200 API responses', async () => {
		mockApi.get.mockRejectedValue({
			status: 500,
			statusText: 'Internal Server Error',
		});

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});
});
