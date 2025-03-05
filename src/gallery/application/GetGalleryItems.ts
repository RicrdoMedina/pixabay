import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

export const GetGalleryItems =
	(fetchAll: () => Promise<GalleryEntity[]>) =>
	async (): Promise<GalleryEntity[]> => {
		return await fetchAll();
	};
