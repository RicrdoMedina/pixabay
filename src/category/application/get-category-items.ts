import { CategoryEntity } from '@/category/domain/category-entity';
import { CategoryRepository } from '@/category/domain/category-repository';

export const makeGetCategoryItems =
	(repository: CategoryRepository) => async (): Promise<CategoryEntity[]> =>
		repository.fetchAll();
