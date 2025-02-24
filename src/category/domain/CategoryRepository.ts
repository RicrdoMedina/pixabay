import { CategoryEntity } from '@/category/domain/CategoryEntity';

export type FetchAllCategoryItems = () => Promise<CategoryEntity[]>;
