import { mapGalleryData } from '@/gallery/infrastructure/GalleryMapper';
import mockGalleryItems from '@/mocks/mockGalleryItems';

describe('GalleryMapper.ts', () => {
	test('should correctly map API data to GalleryEntity', () => {
		const mockApiResponse = [
			{
				id: 9382636,
				pageURL:
					'https://pixabay.com/photos/landscape-moutains-clouds-snow-9382636/',
				type: 'photo',
				tags: 'landscape, moutains, clouds, snow, switzerland, hiking, nature, meadow',
				previewURL:
					'https://cdn.pixabay.com/photo/2025/02/04/20/03/landscape-9382636_150.jpg',
				previewWidth: 150,
				previewHeight: 100,
				webformatURL:
					'https://pixabay.com/get/g883dddadd0f146e33654a375c435e7fab41f3f59ba7e3d21a003addbceb25bf496da994ec550009f333bf71d4584abc74c3ecba2ccf65e33e1837d5d51ebfd64_640.jpg',
				webformatWidth: 640,
				webformatHeight: 427,
				largeImageURL:
					'https://pixabay.com/get/g124a146cb8b0f4d6f1828afcd092904f29a9a6eb6c7140ffed44fbb139be8dd2b6e0e55181dfc22fe8dd2be3627432756398c58826f2589ded4ff3aeb6eb61ae_1280.jpg',
				imageWidth: 6000,
				imageHeight: 4000,
				imageSize: 8610280,
				views: null,
				downloads: 1234,
				collections: 3,
				likes: 51,
				comments: 8,
				user_id: 3764790,
				user: 'ELG21',
				userImageURL:
					'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
				fullHDURL: null,
				imageURL: null,
			},
		];

		const result = mapGalleryData(mockApiResponse);

		expect(result).toHaveLength(1);
		const mappedItem = result[0];

		expect(mappedItem.id).toBe(9382636);
		expect(mappedItem.previewWidth).toBe(150);
		expect(mappedItem.previewHeight).toBe(100);
		expect(mappedItem.webformatWidth).toBe(640);
		expect(mappedItem.webformatHeight).toBe(427);
		expect(mappedItem.imageWidth).toBe(6000);
		expect(mappedItem.imageHeight).toBe(4000);
		expect(mappedItem.imageSize).toBe(8610280);
		expect(mappedItem.views).toBe(0);
		expect(mappedItem.downloads).toBe(1234);
		expect(mappedItem.collections).toBe(3);
		expect(mappedItem.likes).toBeGreaterThanOrEqual(50);
		expect(mappedItem.comments).toBe(8);

		expect(mappedItem.pageURL).toBe(
			'https://pixabay.com/photos/landscape-moutains-clouds-snow-9382636/'
		);
		expect(mappedItem.type).toBe('photo');
		expect(mappedItem.tags).toContain('nature');
		expect(mappedItem.user).toBe('ELG21');
		expect(mappedItem.userImageURL).toBe(
			'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg'
		);

		expect(mappedItem.fullHDURL).toBe('');
		expect(mappedItem.imageURL).toBe('');
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
				user: undefined,
			},
		];

		const result = mapGalleryData(mockApiResponse);
		expect(result).toHaveLength(1);
		const mappedItem = result[0];

		expect(mappedItem.id).toBe(0);
		expect(mappedItem.tags).toBe('');
		expect(mappedItem.previewURL).toBe('');
		expect(mappedItem.user).toBe('');
	});
});
