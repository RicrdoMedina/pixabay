import { categoryData } from '@/mocks/dummy-data/category-data';

export async function GET(request: Request) {
	return Response.json({ message: 'Categories Listed', data: categoryData });
}
