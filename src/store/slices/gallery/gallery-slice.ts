import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryEntity } from '@/gallery/domain/gallery-entity';

type GalleryState = {
	items: GalleryEntity[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string;
	favorites: GalleryEntity[];
};

const initialState: GalleryState = {
	favorites: [],
	items: [],
	status: 'idle',
};

const gallerySlice = createSlice({
	name: 'gallery',
	initialState,
	reducers: {
    setInitialGalleryItems(state, action: PayloadAction<GalleryEntity[]>) {
      if (state.status === "idle") {
        state.items = action.payload;
        state.status = "succeeded";
      }
    },
		addFavorite: (state, action) => {
			state.favorites.push(action.payload);
		},
		removeFavorite: (state, action) => {
			state.favorites = state.favorites.filter(
				item => item.id !== action.payload.id
			);
		},
	}
});

export const { addFavorite, removeFavorite,setInitialGalleryItems } = gallerySlice.actions;
export default gallerySlice.reducer;
