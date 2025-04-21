import { subCategoryData } from '@/mocks/dummy-data/sub-category-data';

export async function GET(request: Request) {
  return Response.json({ message: 'SubCategories Listed', data: subCategoryData });
}
