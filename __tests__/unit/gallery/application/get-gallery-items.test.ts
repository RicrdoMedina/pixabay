import { GetGalleryItems } from '@/gallery/application/get-gallery-items';
import mockGalleryItems from '../../__mocks__/mock-gallery-items';

describe('GetGalleryItems Use Case', () => {
	test('should get images correctly', async () => {
		const mockFetchAll = jest.fn().mockResolvedValue(mockGalleryItems);

		const getGalleryItems = GetGalleryItems(mockFetchAll);
		const result = await getGalleryItems();
		expect(mockFetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(3);
		expect(result[0].id).toBe(9435827);
		expect(result[0].tags).toContain('nature');
	});

	test('should handle errors correctly', async () => {
		const mockFetchAll = jest.fn().mockRejectedValue(new Error('API Error'));

		const getGalleryItems = GetGalleryItems(mockFetchAll);

		await expect(getGalleryItems()).rejects.toThrow('API Error');
		expect(mockFetchAll).toHaveBeenCalledTimes(1);
	});
});
