import { createHttpGalleryRepository } from '@/gallery/infrastructure/http-gallery-repository';
import type { ApiClient } from '@/lib/api-client';
import type { GalleryEntity } from '@/gallery/domain/gallery-entity';
import { mapGalleryData } from '@/gallery/infrastructure/gallery-mapper';

describe('createHttpGalleryRepository Unit Test', () => {
	const mockApi: jest.Mocked<ApiClient> = {
		get: jest.fn(),
		post: jest.fn(),
		patch: jest.fn(),
		put: jest.fn(),
		delete: jest.fn(),
	};

	const repository = createHttpGalleryRepository(mockApi);

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should get images correctly', async () => {
		const hits = [
			{ id: 1, tags: 'nature, mountains', user_id: 1 } as GalleryEntity,
		];

		const expected = mapGalleryData(hits);

		mockApi.get.mockResolvedValue({ data: { data: { hits } } });

		const result = await repository.fetchAll();

		expect(mockApi.get).toHaveBeenCalledWith('/gallery');
		expect(result).toEqual(expected);
	});

	test('should return an empty array when API response is missing `hits`', async () => {
		mockApi.get.mockRejectedValue(new Error('Network Failed'));

		const result = await repository.fetchAll();

		expect(result).toEqual([]);
		expect(mockApi.get).toHaveBeenCalledWith('/gallery');
	});
});
