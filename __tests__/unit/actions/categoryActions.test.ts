import { getCategoryActions } from '@/actions/categoryActions';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { categoryData } from '@/mocks/dummyData/categoryData';

describe('categoryActions.ts', () => {
	test('should return category items correctly', async () => {
		const mockCategoryItems: CategoryEntity[] = categoryData;

    const mockGetCategoryItemsUseCase = jest.fn().mockResolvedValue(mockCategoryItems);

    const getCategoryItems = await getCategoryActions(mockGetCategoryItemsUseCase);

    expect(mockGetCategoryItemsUseCase).toHaveBeenCalledTimes(1)
    expect(getCategoryItems).toHaveLength(8)
    expect(getCategoryItems).toEqual(mockCategoryItems)
	});

  test("should handle errors correctly", async () => {
    const mockUseCase = jest.fn().mockRejectedValue(new Error("API Error"));

    const getCategoryItems = await getCategoryActions(mockUseCase)

    expect(mockUseCase).toHaveBeenCalledTimes(1);
    expect(getCategoryItems).toEqual([])
  })
});
