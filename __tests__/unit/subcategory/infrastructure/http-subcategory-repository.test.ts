import { createHttpSubCategoryRepository } from '@/subcategory/infrastructure/http-subcategory-repository';
import type { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import type { ApiClient } from '@/lib/api-client';
import { subCategoryData } from '@/mocks/dummy-data/sub-category-data';

describe('createHttpSubCategoryRepository Unit Test', () => {
	const mockApi: jest.Mocked<ApiClient> = {
		get: jest.fn(),
		post: jest.fn(),
		patch: jest.fn(),
		put: jest.fn(),
		delete: jest.fn(),
	};

	const repository = createHttpSubCategoryRepository(mockApi);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should get subcategories correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		mockApi.get.mockResolvedValue({
			status: 200,
			data: { data: mockSubCategoryItems },
		});

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(mockApi.get).toHaveBeenCalledWith('/subcategory');
		expect(result).toEqual(mockSubCategoryItems);
	});

	test('should handle errors if API fails', async () => {
		mockApi.get.mockRejectedValue(new Error('API Error'));

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});

	test('should handle non-200 API Responses', async () => {
		mockApi.get.mockResolvedValue({
			status: 500,
			statusText: 'Internal Server Error',
		});

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledTimes(1);
		expect(result).toEqual([]);
	});
});
