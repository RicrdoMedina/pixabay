import { mapGalleryData } from '@/gallery/infrastructure/GalleryMapper';
import mockGalleryApi from '../../__mocks__/mockGalleryApi';
import mockGalleryItems from '../../__mocks__/mockGalleryItems';

describe('GalleryMapper.ts', () => {
	test('should correctly map API data to GalleryEntity', () => {
		const mockApiResponse = mockGalleryApi;

		const result = mapGalleryData(mockApiResponse);

		expect(result).toHaveLength(3);

		expect(result).toEqual(mockGalleryItems);
	});

	test('should return an empty array when given an empty input', () => {
		const mockApiResponse: never[] = [];
		const result = mapGalleryData(mockApiResponse);
		expect(result).toEqual([]);
	});

	test('should handle undefined or missing fields correctly', () => {
		const mockApiResponse = [
			{
				id: undefined,
				type: undefined,
				tags: null,
				previewURL: undefined,
				largeImageURL: undefined,
			},
		];

		const result = mapGalleryData(mockApiResponse);
		expect(result).toHaveLength(1);
		const mappedItem = result[0];

		expect(mappedItem.id).toBe(0);
		expect(mappedItem.tags).toBe('');
		expect(mappedItem.previewURL).toBe('');
		expect(mappedItem.verified).toBe(false);
		expect(mappedItem.url).toBe('');
	});
});
