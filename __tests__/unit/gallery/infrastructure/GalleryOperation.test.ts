import {
	fetchAllGalleryItems,
	searchGalleryByTag,
} from '@/gallery/infrastructure/GalleryOperation';
import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

describe('fetchAllGalleryItems GalleryOperation.ts', () => {
	let mockHttp: { get: jest.Mock };
	let mockMapGalleryData: jest.Mock;

	beforeEach(() => {
		mockHttp = { get: jest.fn() };
		mockMapGalleryData = jest.fn();
	});

	test('should get images correctly', async () => {
		const mockGalleryItems: GalleryEntity[] = [
			{ id: 1, tags: 'nature, mountains', user_id: 1 } as GalleryEntity,
		];

		mockHttp.get.mockResolvedValue({
			status: 200,
			data: { data: { hits: mockGalleryItems } },
		});

		mockMapGalleryData.mockReturnValue(mockGalleryItems);

		const getGalleryItems = fetchAllGalleryItems(mockHttp, mockMapGalleryData);
		const result = await getGalleryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockHttp.get).toHaveBeenCalledWith('/gallery');

		expect(mockMapGalleryData).toHaveBeenCalledWith(mockGalleryItems);
		expect(result).toEqual(mockGalleryItems);
	});

	test('should return an empty array when API response is missing `hits`', async () => {
		mockHttp.get.mockResolvedValue({
			status: 200,
			data: {},
		});

		mockMapGalleryData.mockReturnValue([]);

		const getGalleryItems = fetchAllGalleryItems(mockHttp, mockMapGalleryData);
		const result = await getGalleryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).toHaveBeenCalledWith([]);
		expect(result).toEqual([]);
	});

	test('should handle errors if the API fails', async () => {
		mockHttp.get.mockRejectedValue(new Error('API Error'));

		const getGalleryItems = fetchAllGalleryItems(mockHttp, mockMapGalleryData);
		const result = await getGalleryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).not.toHaveBeenCalled();
		expect(result).toEqual([]);
	});

	test("should handle non-200 API responses", async () => {
		mockHttp.get.mockResolvedValue({
			status: 500,
			statusText: "Internal Server Error"
		})

		const getGalleryItems = fetchAllGalleryItems(mockHttp, mockMapGalleryData)
		const result = await getGalleryItems();

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).not.toHaveBeenCalled();
		expect(result).toEqual([])
	})
});

describe('searchGalleryByTag GalleryOperation.ts', () => {
	let mockHttp: { get: jest.Mock };
	let mockMapGalleryData: jest.Mock;

	beforeEach(() => {
		mockHttp = { get: jest.fn() };
		mockMapGalleryData = jest.fn();
	});

	test('should get images correctly', async () => {
		const mockGalleryItems: GalleryEntity[] = [
			{ id: 1, tags: 'nature, mountains', user_id: 1 } as GalleryEntity,
		];

		mockHttp.get.mockResolvedValue({
			status: 200,
			data: { data: { hits: mockGalleryItems } },
		});

		mockMapGalleryData.mockReturnValue(mockGalleryItems);

		const getGalleryItemsByTags = searchGalleryByTag(
			mockHttp,
			mockMapGalleryData
		);

		const queryParams = 'key=ksl455&q=yellow+flowers&image_type=photo';
		const result = await getGalleryItemsByTags(queryParams);

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockHttp.get).toHaveBeenCalledWith(`/gallery/?${queryParams}`);

		expect(mockMapGalleryData).toHaveBeenCalledWith(mockGalleryItems);
		expect(result).toEqual(mockGalleryItems);
		expect(result).toHaveLength(1);
		expect(result[0].id).toBe(1);
		expect(result[0].tags).toContain('nature');
	});

	test('should return an empty array when API response is missing `hits`', async () => {
		mockHttp.get.mockResolvedValue({
			status: 200,
			data: {},
		});

		mockMapGalleryData.mockReturnValue([]);

		const getGalleryItemsByTags = searchGalleryByTag(
			mockHttp,
			mockMapGalleryData
		);
		const result = await getGalleryItemsByTags('key=ksl455&q=invalid');

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).toHaveBeenCalledWith([]);
		expect(result).toEqual([]);
	});

	test('should handle errors if the API fails', async () => {
		mockHttp.get.mockRejectedValue(new Error('API Error'));

		const getGalleryItemsByTags = searchGalleryByTag(
			mockHttp,
			mockMapGalleryData
		);
		const result = await getGalleryItemsByTags('key=ksl455&q=invalid');

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).not.toHaveBeenCalled();
		expect(result).toEqual([]);
	});

	test("should handle non-200 API responses", async () => {
		mockHttp.get.mockResolvedValue({
			status: 500,
			statusText: "Internal Server Error"
		})

		const getGalleryItemsByTags = searchGalleryByTag(mockHttp, mockMapGalleryData)
		const result = await getGalleryItemsByTags('key=ksl455&q=invalid');

		expect(mockHttp.get).toHaveBeenCalledTimes(1);
		expect(mockMapGalleryData).not.toHaveBeenCalled();
		expect(result).toEqual([])
	})
});
