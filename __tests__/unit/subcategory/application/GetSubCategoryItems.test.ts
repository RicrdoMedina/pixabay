import { GetSubCategoryItems } from '@/subcategory/application/GetSubCategoryItems';
import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';
import { subCategoryData } from '@/mocks/dummyData/subCategoryData';

describe('GetSubCategoryItems Use Case', () => {
	test('should get subcategory correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		const mockFetchAll = jest.fn().mockResolvedValue(mockSubCategoryItems);

		const getSubCategoryItems = GetSubCategoryItems(mockFetchAll);
		const result = await getSubCategoryItems();

		expect(mockFetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(40);
		expect(result[0].subCategoryId).toBe(1);
		expect(result[0].subCategoryName).toBe('nature');
	});

  test("should handle errors correctly", async () => {
    const mockFetchAll = jest.fn().mockRejectedValue(new Error('API Error'));

    const getSubCategoryItems = GetSubCategoryItems(mockFetchAll);
    
    await expect(getSubCategoryItems()).rejects.toThrow('API Error');
    expect(mockFetchAll).toHaveBeenCalledTimes(1)
  })
});
