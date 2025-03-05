import { categoryData } from '@/mocks/dummyData/categoryData';

export async function GET(request: Request) {
	return Response.json({ message: 'Categories Listed', data: categoryData });
}
