import reducer, {
	selectSubFilter,
} from '@/store/slices/sub-filter/sub-filter-slice';
import { ISubFiler } from '@/interfaces';

describe('subCategorySlice reducer', () => {
	const mockItems: ISubFiler[] = [
		{ id: 1, name: 'Trending', slug: 'trending' },
		{ id: 2, name: "Editor's Choice", slug: 'ec' },
		{ id: 3, name: 'Latest', slug: 'latest' },
	];

	test('select a sub filter correctly', () => {
		const mockItem = mockItems[1];

		const state = {
			selectedItem: 1,
			items: mockItems,
		};

		const result = reducer(state, selectSubFilter(mockItem.id));

		expect(result.selectedItem).toEqual(mockItem.id);
	});
});
