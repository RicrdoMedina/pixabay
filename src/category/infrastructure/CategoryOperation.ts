import { CategoryEntity } from '@/category/domain/CategoryEntity';

export const fetchAllCategoryItems = (http: {
	get: (url: string) => Promise<any>;
}) => {
	return async (): Promise<CategoryEntity[]> => {
		try {
			const response = await http.get('/category');
			if (!response || response.status !== 200)
				throw new Error(`Error: ${response.statusText}`);
			const data = response.data?.data;
			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	};
};
