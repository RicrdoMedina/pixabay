import { SubCategoryEntity } from '@/subcategory/domain/sub-category-entity';

export interface SubCategoryRepository {
  fetchAll(): Promise<SubCategoryEntity[]>;
}