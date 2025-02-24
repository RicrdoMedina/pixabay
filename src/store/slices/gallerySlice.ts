import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

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
	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGalleryItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGalleryItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchGalleryItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const fetchGalleryItems = createAsyncThunk(
  "gallery/fetchGalleryItems",
  async (_, { rejectWithValue }) => {
    try {
      //return await galleryUseCase.getAll();
    } catch (error: any) {
      //return rejectWithValue(error.message);
    }
  }
);

export const { addFavorite, removeFavorite,setInitialGalleryItems } = gallerySlice.actions;
export default gallerySlice.reducer;
