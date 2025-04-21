import reducer, {
	setInitialSubCategoryItems,
	selectSubCategory,
} from '@/store/slices/subcategory/sub-category-clice';
import { subCategoryData } from '@/mocks/dummy-data/sub-category-data';
import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';

describe('subCategorySlice reducer', () => {
	const mockItems: SubCategoryEntity[] = subCategoryData;

	test('setInitialGalleryItems only when status is "idle"', () => {
		const initialState = {
			selectedItem: 0,
			items: [],
			status: 'idle',
		};

		const result = reducer(initialState, setInitialSubCategoryItems(mockItems));

		expect(result.items).toEqual(mockItems);
		expect(result.status).toBe('succeeded');

		const newState = reducer(result, setInitialSubCategoryItems([]));
		expect(newState.items).toEqual(mockItems);
	});

	test('select a sub category correctly', () => {
		const mockItem = mockItems[4];

		const state = {
			selectedItem: 0,
			items: [],
			status: 'idle',
		};
    
		const result = reducer(state, selectSubCategory(mockItem.subCategoryId));

		expect(result.selectedItem).toEqual(mockItem.subCategoryId);
	});
});