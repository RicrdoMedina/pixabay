import { GetGalleryItems } from '@/gallery/application/GetGalleryItems';
import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

describe('GetGalleryItems Use Case', () => {
	test('should get images correctly', async () => {
		const mockGalleryItems: GalleryEntity[] = [
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
				views: 1518,
				downloads: 1234,
				collections: 3,
				likes: 51,
				comments: 8,
				user_id: 3764790,
				user: 'ELG21',
				userImageURL:
					'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
				fullHDURL: '',
				imageURL: '',
			},
		];

		const mockFetchAll = jest.fn().mockResolvedValue(mockGalleryItems);

		const getGalleryItems = GetGalleryItems(mockFetchAll);
		const result = await getGalleryItems();
		expect(mockFetchAll).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(1);
		expect(result[0].id).toBe(9382636);
		expect(result[0].tags).toContain('nature');
	});

	test('should handle errors correctly', async () => {
		const mockFetchAll = jest.fn().mockRejectedValue(new Error('API Error'));

		const getGalleryItems = GetGalleryItems(mockFetchAll);

		await expect(getGalleryItems()).rejects.toThrow('API Error');
		expect(mockFetchAll).toHaveBeenCalledTimes(1);
	});
});
