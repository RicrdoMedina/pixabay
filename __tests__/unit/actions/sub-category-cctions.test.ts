import { getSubCategoryActions } from '@/actions/sub-category-actions';
import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import { subCategoryData } from '@/mocks/dummy-data/sub-category-data';

describe('subCategoryActions.ts', () => {
	test('should return subcategory items correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		const mockGetSubCategoryUseCase = jest
			.fn()
			.mockResolvedValue(mockSubCategoryItems);

		const getSubCategoryItems = await getSubCategoryActions(
			mockGetSubCategoryUseCase
		);

		expect(mockGetSubCategoryUseCase).toHaveBeenCalledTimes(1);
		expect(getSubCategoryItems).toHaveLength(40);
		expect(getSubCategoryItems).toEqual(mockSubCategoryItems);
	});

	test('should handle errors correctly', async () => {
		const mockUseCase = jest.fn().mockRejectedValue(new Error('API Error'));

		const getSubCategoryItems = await getSubCategoryActions(mockUseCase);
		expect(mockUseCase).toHaveBeenCalledTimes(1);
		expect(getSubCategoryItems).toEqual([]);
	});
});
