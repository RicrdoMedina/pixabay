import { runGetUseCase } from '@/actions/run-get-use-case';
import { getGalleryItemsUseCase } from '@/gallery/infrastructure';
import { axiosInstance } from '@/lib/http-client';
import MockAdapter from 'axios-mock-adapter';
import mockGalleryItems from '../../unit/__mocks__/mock-gallery-items';
import mockGalleryApi from '../../unit/__mocks__/mock-gallery-api';

describe('runGetUseCase Integration Test', () => {
	let mockAxios: MockAdapter;

	beforeEach(() => {
		mockAxios = new MockAdapter(axiosInstance);
	});

	afterEach(() => {
		mockAxios.restore();
	});

	test('should return gallery items when API responds correctly', async () => {
		mockAxios.onGet('/gallery').reply(200, { data: { hits: mockGalleryApi } });

		const result = await runGetUseCase(getGalleryItemsUseCase);

		expect(result).toEqual(mockGalleryItems);

		//console.log('Solicitudes interceptadas:', mockAxios.history.get);
	});

	test('Should handle unexpected responses and return an empty array', async () => {
		mockAxios.onGet('/gallery').reply(200, {});

		const result = await runGetUseCase(getGalleryItemsUseCase);

		expect(result).toEqual([]);
	});

	test('should handle errors and return an empty array when the API fails', async () => {
		mockAxios.onGet('/gallery').reply(500, 'Internal Server Error');

		const result = await runGetUseCase(getGalleryItemsUseCase);

		expect(result).toEqual([]);
	});
});
