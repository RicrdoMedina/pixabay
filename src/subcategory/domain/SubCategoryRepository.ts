import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';

export type fetchAllSubCategoryItems = () => Promise<SubCategoryEntity[]>;
