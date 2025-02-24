import { CategoryEntity } from '@/category/domain/CategoryEntity';

export const GetCategoryItems = (fetchAll: () => Promise<CategoryEntity[]>) => {
	return async (): Promise<CategoryEntity[]> => {
		return await fetchAll();
	};
};
