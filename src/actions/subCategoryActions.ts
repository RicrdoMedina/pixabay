'use server';

import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';

export async function getSubCategoryActions(
  getSubCategoryItemsUseCase: () => Promise<SubCategoryEntity[]>
): Promise<SubCategoryEntity[]> {
  try {
    return await getSubCategoryItemsUseCase();
  } catch (error) {
    console.error('Error obteniendo sub categorias', error);
    return [];
  }
}
