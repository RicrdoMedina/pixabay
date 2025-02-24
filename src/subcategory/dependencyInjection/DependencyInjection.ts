import { fetchAllSubCategoryItems } from '@/subcategory/infrastructure/SubCategoryOperation';
import { GetSubCategoryItems } from '@/subcategory/application/GetSubCategoryItems';
import Http from '@/lib/Http';

export const getSubCategoryItemsUseCase = GetSubCategoryItems(
	fetchAllSubCategoryItems(Http)
);
