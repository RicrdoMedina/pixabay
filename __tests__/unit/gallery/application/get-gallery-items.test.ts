import { makeGetGalleryItems } from '@/gallery/application/get-gallery-items';
import mockGalleryItems from '../../__mocks__/mock-gallery-items';
import { GalleryRepository } from '@/gallery/domain/gallery-repository';

describe('makeGetGalleryItems Unit Test', () => {
	test('should get images correctly', async () => {
		const repository: jest.Mocked<GalleryRepository> = {
			fetchAll: jest.fn().mockResolvedValue(mockGalleryItems),
		};

		const getGalleryItems = makeGetGalleryItems(repository);
		const result = await getGalleryItems();
		expect(repository.fetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(3);
		expect(result[0].id).toBe(9435827);
		expect(result[0].tags).toContain('nature');
	});

	test('should handle errors correctly', async () => {
		const repository: jest.Mocked<GalleryRepository> = {
			fetchAll: jest.fn().mockRejectedValue(new Error('API Error')),
		};

		const getGalleryItems = makeGetGalleryItems(repository);

		await expect(getGalleryItems()).rejects.toThrow('API Error');
		expect(repository.fetchAll).toHaveBeenCalledTimes(1);
	});
});
