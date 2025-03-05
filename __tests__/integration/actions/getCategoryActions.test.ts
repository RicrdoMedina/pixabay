import { getCategoryActions } from '@/actions/categoryActions';
import { getCategoryItemsUseCase } from '@/category/dependencyInjection/DependencyInjection';
import Http from '@/lib/Http';
import MockAdapter from 'axios-mock-adapter';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { categoryData } from '@/mocks/dummyData/categoryData';

describe('getCategoryActions Integration Test', () => {
	let mockAxios: MockAdapter;

	beforeEach(() => {
		mockAxios = new MockAdapter(Http.http);
	});

	afterEach(() => {
		mockAxios.restore();
	});

  test("should return category items when API responds correctly", async () => {
    const mockCategoryItems: CategoryEntity[] = categoryData;

    mockAxios.onGet('/category').reply(200, { data: mockCategoryItems });

    const result = await getCategoryActions(getCategoryItemsUseCase)

    expect(result).toEqual(mockCategoryItems)
  })

  test("should handle errors and return an empty array when the API fails", async () => {
		mockAxios.onGet('/gallery').reply(500, 'Internal Server Error');

    const result = await getCategoryActions(getCategoryItemsUseCase);

    expect(result).toEqual([])
  })
});
