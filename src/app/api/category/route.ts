import { categoryData } from '@/mocks/dummyData/categoryData';

export async function GET(request: Request) {
	return Response.json({ message: 'Success', data: categoryData });
}
