import type { CategoryRepository } from '@/category/domain/category-repository';
import type { CategoryEntity } from '@/category/domain/category-entity';
import type { ApiClient } from '@/lib/api-client';

export const createHttpCategoryRepository = (
	api: ApiClient
): CategoryRepository => ({
	fetchAll: async (): Promise<CategoryEntity[]> => {
		try {
			const response = await api.get('/category');
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
