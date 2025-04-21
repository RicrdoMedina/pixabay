import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';
import { SubCategoryRepository } from '@/subcategory/domain/sub-category-repository';

export const makeGetSubCategoryItems =
	(repository: SubCategoryRepository) =>
	async (): Promise<SubCategoryEntity[]> =>
		repository.fetchAll();

