import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/store/slices/couterSlice'
import galleryReducer from '@/store/slices/gallerySlice'
import categoryReducer from "@/store/slices/categorySlice"
import subCategoryReducer from "@/store/slices/subCategorySlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;