import { subFilterData } from '@/mocks/dummyData/subFilterData';

export async function GET(request: Request) {
  return Response.json({ message: 'SubFilter Listed', data: subFilterData });
}
