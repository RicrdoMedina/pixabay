import { fetchAllCategoryItems } from '@/category/infrastructure/CategoryOperation';
import { GetCategoryItems } from '@/category/application/GetCategoryItems';
import Http from '@/lib/Http';

export const getCategoryItemsUseCase = GetCategoryItems(
	fetchAllCategoryItems(Http)
);
