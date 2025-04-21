import { makeGetCategoryItems } from '@/category/application/get-category-items';
import { CategoryEntity } from '@/category/domain/category-entity';
import { categoryData } from '@/mocks/dummy-data/category-data';
import { CategoryRepository } from '@/category/domain/category-repository';

describe('makeGetCategoryItems Unit Test', () => {
	test('should get categories correctly', async () => {
		const mockCategoryItems: CategoryEntity[] = categoryData;

		const repository: jest.Mocked<CategoryRepository> = {
      fetchAll: jest.fn().mockResolvedValue(mockCategoryItems)
    };

		const getCategoryItems = makeGetCategoryItems(repository);
		const result = await getCategoryItems();

		expect(repository.fetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(8);
		expect(result[0].categoryId).toBe(1);
		expect(result[0].categoryName).toBe('Explore');
	});

	test('should handle errors correctly', async () => {

		const repository: jest.Mocked<CategoryRepository> = {
      fetchAll: jest.fn().mockRejectedValue(new Error('API Error'))
    };

		const getCategoryItems = makeGetCategoryItems(repository);
		await expect(getCategoryItems()).rejects.toThrow('API Error');
    expect(repository.fetchAll).toHaveBeenCalledTimes(1)
	});
});
