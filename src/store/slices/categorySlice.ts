import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CategoryState = {
	items: CategoryEntity[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string;
	selectedItem: number;
};

const initialState: CategoryState = {
	selectedItem: 1,
	items: [],
	status: 'idle',
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setInitialCategoryItems(state, action: PayloadAction<CategoryEntity[]>) {
			if (state.status === 'idle') {
				state.items = action.payload;
				state.status = 'succeeded';
			}
		},
		selectCategory: (state, action) => {
			state.selectedItem = action.payload;
		},
	},
});

export const { selectCategory, setInitialCategoryItems } =
	categorySlice.actions;
export default categorySlice.reducer;
