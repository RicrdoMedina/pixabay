import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';

export const fetchAllSubCategoryItems = (http: {
	get: (url: string) => Promise<any>;
}) => {
	return async (): Promise<SubCategoryEntity[]> => {
		try {
			const response = await http.get('/subcategory');
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
