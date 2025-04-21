import { subFilterData } from '@/mocks/dummy-data/sub-filter-data';

export async function GET(request: Request) {
  return Response.json({ message: 'SubFilter Listed', data: subFilterData });
}
