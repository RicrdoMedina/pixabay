import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from '@/store/slices/couter-slice'
import galleryReducer from '@/store/slices/gallery/gallery-slice'
import categoryReducer from "@/store/slices/category/category-slice"
import subCategoryReducer from "@/store/slices/subcategory/sub-category-clice"
import subFilterReducer from "@/store/slices/sub-filter/sub-filter-slice"
import modalReducer from "@/store/slices/modal/modal-slices";

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    modal: modalReducer,
    gallery: galleryReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    subFilter: subFilterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['modal/openModal', 'modal/closeModal'],
        ignoredPaths: ['modal.content'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;