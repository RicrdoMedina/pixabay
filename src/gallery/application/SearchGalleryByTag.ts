import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

export const SearchGalleryByTag =
	(
		searchGalleryByTag: (tag: string) => Promise<GalleryEntity[]>,
	) =>
	async (tag: string): Promise<GalleryEntity[]> => {
		return await searchGalleryByTag(tag);
	};
