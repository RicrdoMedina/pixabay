import { makeGetSubCategoryItems } from '@/subcategory/application/get-sub-category-items'; 
import { createHttpSubCategoryRepository } from '@/subcategory/infrastructure/http-subcategory-repository';
import {HttpClient} from '@/lib/http-client';

const categoryRepository = createHttpSubCategoryRepository(HttpClient);

export const getSubCategoryItemsUseCase = makeGetSubCategoryItems(categoryRepository);