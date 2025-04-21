import { makeGetSubCategoryItems } from '@/subcategory/application/get-sub-category-items';
import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import { subCategoryData } from '@/mocks/dummy-data/sub-category-data';
import { SubCategoryRepository } from '@/subcategory/domain/sub-category-repository';

describe('makeGetSubCategoryItems Unit Test', () => {
	test('should get subcategory correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		const repository: jest.Mocked<SubCategoryRepository> = {
			fetchAll: jest.fn().mockResolvedValue(mockSubCategoryItems),
		};

		const getSubCategoryItems = makeGetSubCategoryItems(repository);
		const result = await getSubCategoryItems();

		expect(repository.fetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(40);
		expect(result[0].subCategoryId).toBe(1);
		expect(result[0].subCategoryName).toBe('nature');
	});

	test('should handle errors correctly', async () => {
		const repository: jest.Mocked<SubCategoryRepository> = {
			fetchAll: jest.fn().mockRejectedValue(new Error('API Error')),
		};

		const getSubCategoryItems = makeGetSubCategoryItems(repository);

		await expect(getSubCategoryItems()).rejects.toThrow('API Error');
		expect(repository.fetchAll).toHaveBeenCalledTimes(1);
	});
});
