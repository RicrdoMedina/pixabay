import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';

export const GetSubCategoryItems = (
	fetchAll: () => Promise<SubCategoryEntity[]>
) => {
	return async (): Promise<SubCategoryEntity[]> => {
		return fetchAll();
	};
};
