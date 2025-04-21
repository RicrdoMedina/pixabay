import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SubCategoryState = {
	items: SubCategoryEntity[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string;
	selectedItem: number;
};

const initialState: SubCategoryState = {
	selectedItem: 1,
	items: [],
	status: 'idle',
};

const categorySlice = createSlice({
	name: 'subcategory',
	initialState,
	reducers: {
		setInitialSubCategoryItems(state, action: PayloadAction<SubCategoryEntity[]>) {
			if (state.status === 'idle') {
				state.items = action.payload;
				state.status = 'succeeded';
			}
		},
		selectSubCategory: (state, action) => {
			state.selectedItem = action.payload;
		},
	},
});

export const { selectSubCategory, setInitialSubCategoryItems } =
	categorySlice.actions;
export default categorySlice.reducer;
