import { createSlice } from "@reduxjs/toolkit";
import { GalleryEntity } from "@/gallery/domain/GalleryEntity";

type GalleryState = {
  favorites: GalleryEntity[];
};

const initialState: GalleryState = {
  favorites: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = gallerySlice.actions;
export default gallerySlice.reducer;
