import { createSlice } from '@reduxjs/toolkit';

export interface SubFilterEntity {
	id: number;
	name: string;
	slug: string;
}

type SubItemsState = {
	items: SubFilterEntity[];
	selectedItem: number;
};

const initialState: SubItemsState = {
	selectedItem: 1,
	items: [
		{ id: 1, name: 'Trending', slug: 'trending' },
		{ id: 2, name: "Editor's Choice", slug: 'ec' },
		{ id: 3, name: 'Latest', slug: 'latest' },
	],
};

const subFilterSlice = createSlice({
	name: 'subFilters',
	initialState,
	reducers: {
		selectSubFilter: (state, action) => {
			state.selectedItem = action.payload;
		},
	},
});

export const { selectSubFilter } = subFilterSlice.actions;
export default subFilterSlice.reducer;
