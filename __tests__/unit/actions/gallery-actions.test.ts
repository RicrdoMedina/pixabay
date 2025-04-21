import { getGalleryActions } from '@/actions/gallery-actions';
import mockGalleryItems from '../__mocks__/mock-gallery-items';

describe('galleryActions.ts', () => {
	test('should return gallery items correctly', async () => {
		const mockImage = mockGalleryItems;

		const mockGetGalleryItemsUseCase = jest
			.fn()
			.mockResolvedValue(mockGalleryItems);

		const galleryItems = await getGalleryActions(
			mockGetGalleryItemsUseCase
		);
		expect(mockGetGalleryItemsUseCase).toHaveBeenCalledTimes(1);
		expect(galleryItems).toHaveLength(3);
		expect(galleryItems).toEqual(mockGalleryItems);
	});

	test('should handle errors correctly', async () => {
    const mockUseCase = jest.fn().mockRejectedValue(new Error("API Error"));

    const result = await getGalleryActions(mockUseCase);

    expect(mockUseCase).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
	});
});
