import { makeGetCategoryItems } from '@/category/application/get-category-items';
import { createHttpCategoryRepository } from '@/category/infrastructure/http-category-repository';
import {HttpClient} from '@/lib/http-client';


const categoryRepository = createHttpCategoryRepository(HttpClient);

export const getCategoryItemsUseCase = makeGetCategoryItems(categoryRepository);
