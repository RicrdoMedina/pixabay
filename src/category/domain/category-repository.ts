import { CategoryEntity } from '@/category/domain/category-entity';

export interface CategoryRepository {
	fetchAll(): Promise<CategoryEntity[]>;
}
