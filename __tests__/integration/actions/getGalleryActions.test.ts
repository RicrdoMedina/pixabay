import { getGalleryActions } from '@/actions/galleryActions';
import { getGalleryItemsUseCase } from '@/gallery/dependencyInjection/DependencyInjection';
import Http from '@/lib/Http';
import MockAdapter from 'axios-mock-adapter';
import mockGalleryItems from '../../unit/__mocks__/mockGalleryItems';

describe('getGalleryActions Integration Test', () => {
	let mockAxios: MockAdapter;

	beforeEach(() => {
		mockAxios = new MockAdapter(Http.http);
	});

	afterEach(() => {
		mockAxios.restore();
	});

	test('should return gallery items when API responds correctly', async () => {

		mockAxios.onGet('/gallery').reply(200, { data: { hits: mockGalleryItems } });

		const result = await getGalleryActions(getGalleryItemsUseCase);

		expect(result).toEqual(mockGalleryItems);

		//console.log('Solicitudes interceptadas:', mockAxios.history.get);
	});

  test('should handle errors and return an empty array when the API fails', async () => {

		mockAxios.onGet('/gallery').reply(500, 'Internal Server Error');

		const result = await getGalleryActions(getGalleryItemsUseCase);

		expect(result).toEqual([]);
	});
});