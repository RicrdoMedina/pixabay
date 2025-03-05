import { getSubCategoryActions } from '@/actions/subCategoryActions';
import { getSubCategoryItemsUseCase } from '@/subcategory/dependencyInjection/DependencyInjection';
import Http from '@/lib/Http';
import MockAdapter from 'axios-mock-adapter';
import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';
import { subCategoryData } from '@/mocks/dummyData/subCategoryData';

describe('getSubCategoryActions Integration Test', () => {
	let mockAxios: MockAdapter;

	beforeEach(() => {
		mockAxios = new MockAdapter(Http.http);
	});

	afterEach(() => {
		mockAxios.restore();
	});

	test('should return subcategory items when API responds correctly', async () => {
		const mockSubCategoryItems: SubCategoryEntity[] = subCategoryData;

		mockAxios.onGet('/subcategory').reply(200, { data: mockSubCategoryItems });

		const result = await getSubCategoryActions(getSubCategoryItemsUseCase);

		expect(result).toEqual(mockSubCategoryItems);
	});

  test("should handle errors and return an empty array when the API fails", async () => {
    mockAxios.onGet('/gallery').reply(500, 'Internal Server Error');

    const result = await getSubCategoryActions(getSubCategoryItemsUseCase);

    expect(result).toEqual([])
  })
});
