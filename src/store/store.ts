import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/store/slices/couter-slice'
import galleryReducer from '@/store/slices/gallery/gallery-slice'
import categoryReducer from "@/store/slices/category/category-slice"
import subCategoryReducer from "@/store/slices/subcategory/sub-category-clice"
import subFilterReducer from "@/store/slices/sub-filter/sub-filter-slice"

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