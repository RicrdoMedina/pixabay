import { GetCategoryItems } from '@/category/application/GetCategoryItems';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { GetGalleryItems } from '@/gallery/application/GetGalleryItems';
import { categoryData } from '@/mocks/dummyData/categoryData';

describe('GetCategoryItems Use Case', () => {
	test('should get categories correctly', async () => {
		const mockCategoryItems: CategoryEntity[] = categoryData;

		const mockFetchAll = jest.fn().mockResolvedValue(mockCategoryItems);

		const getCategoryItems = GetCategoryItems(mockFetchAll);
		const result = await getCategoryItems();

		expect(mockFetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(8);
		expect(result[0].categoryId).toBe(1);
		expect(result[0].categoryName).toBe('Explore');
	});

	test('should handle errors correctly', async () => {
		const mockFetchAll = jest.fn().mockRejectedValue(new Error('API Error'));

		const getGalleryItems = GetGalleryItems(mockFetchAll);
		await expect(getGalleryItems()).rejects.toThrow('API Error');
    expect(mockFetchAll).toHaveBeenCalledTimes(1)
	});
});
