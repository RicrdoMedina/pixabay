'use server';

import { CategoryEntity } from '@/category/domain/CategoryEntity';

export async function getCategoryActions(
	getCategoryItemsUseCase: () => Promise<CategoryEntity[]>
): Promise<CategoryEntity[]> {
	try {
		return await getCategoryItemsUseCase();
	} catch (error) {
		console.error('Error: Could not get categories', error);
		return [];
	}
}
