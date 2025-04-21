import { SearchGalleryByTag } from '@/gallery/application/search-gallery-by-tag';
import mockGalleryItems from '../../__mocks__/mock-gallery-items';

describe('GetGalleryItems Use Case', () => {
	const queryParams = "'key=ksl455&q=yellow+flowers&image_type=photo'";
	test('should get images correctly', async () => {

		const mockSearchGalleryByTag = jest
			.fn()
			.mockResolvedValue(mockGalleryItems);

		const searchGalleryByTag = SearchGalleryByTag(mockSearchGalleryByTag);
		const result = await searchGalleryByTag(queryParams);
		expect(mockSearchGalleryByTag).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(3);
		expect(result[0].id).toBe(9435827);
		expect(result[0].tags).toContain('nature');
	});

	test('should handle errors correctly', async () => {
		const mockSearchGalleryByTag = jest
			.fn()
			.mockRejectedValue(new Error('API Error'));

		const searchGalleryByTag = SearchGalleryByTag(mockSearchGalleryByTag);

		await expect(searchGalleryByTag(queryParams)).rejects.toThrow('API Error');
		expect(mockSearchGalleryByTag).toHaveBeenCalledTimes(1);
	});
});
