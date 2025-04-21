import reducer, {
	selectCategory,
	setInitialCategoryItems,
} from '@/store/slices/category/category-slice';
import { CategoryEntity } from '@/category/domain/category-entity';
import { categoryData } from '@/mocks/dummy-data/category-data';

describe('categorySlice reducer', () => {
	const mockItems: CategoryEntity[] = categoryData;

	test('setInitialGalleryItems only when status is "idle"', () => {
		const initialState = {
			selectedItem: 0,
			items: [],
			status: 'idle',
		};

		const result = reducer(initialState, setInitialCategoryItems(mockItems));

		expect(result.items).toEqual(mockItems);
		expect(result.status).toBe('succeeded');

		const newState = reducer(result, setInitialCategoryItems([]));
		expect(newState.items).toEqual(mockItems);
	});

	test('select a category correctly', () => {
		const mockItem = mockItems[4];

		const state = {
			selectedItem: 0,
			items: [],
			status: 'idle',
		};
    
		const result = reducer(state, selectCategory(mockItem.categoryId));

		expect(result.selectedItem).toEqual(mockItem.categoryId);
	});
});
