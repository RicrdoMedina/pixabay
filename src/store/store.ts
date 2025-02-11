import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/store/slices/couterSlice'
import galleryReducer from '@/store/slices/gallerySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;