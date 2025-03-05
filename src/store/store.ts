import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/store/slices/couterSlice'
import galleryReducer from '@/store/slices/gallerySlice'
import categoryReducer from "@/store/slices/categorySlice"
import subCategoryReducer from "@/store/slices/subCategorySlice"
import subFilterReducer from "@/store/slices/subFilterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    subFilter: subFilterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;