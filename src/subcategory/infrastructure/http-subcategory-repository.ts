import type { SubCategoryRepository } from '@/subcategory/domain/sub-category-repository';
import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import type { ApiClient } from '@/lib/api-client';

export const createHttpSubCategoryRepository = (
	api: ApiClient
): SubCategoryRepository => ({
	fetchAll: async (): Promise<SubCategoryEntity[]> => {
		try {
			const response = await api.get('/subcategory');
			if (!response || response.status !== 200)
				throw new Error(`Error: ${response.statusText}`);
			const data = response.data?.data;
			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	}
});
