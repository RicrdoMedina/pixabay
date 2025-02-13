import { GalleryEntity } from '@/gallery/domain/gallery.entity';

export const SearchGalleryByTag =
	(
		searchGalleryByTag: (tag: string) => Promise<GalleryEntity[]>,
	) =>
	async (tag: string): Promise<GalleryEntity[]> => {
		return await searchGalleryByTag(tag);
	};
