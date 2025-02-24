import { subCategoryData } from '@/mocks/dummyData/subCategoryData';

export async function GET(request: Request) {
  return Response.json({ message: 'Success', data: subCategoryData });
}
