import {
	fetchAllGalleryItems,
	searchGalleryByTag,
} from '@/gallery/infrastructure/GalleryOperation';
import { GetGalleryItems } from '@/gallery/application/GetGalleryItems';
import { SearchGalleryByTag } from '@/gallery/application/SearchGalleryByTag';
import { mapGalleryData } from '@/gallery/infrastructure/GalleryMapper';
import Http from '@/lib/Http';

export const getGalleryItemsUseCase = GetGalleryItems(
	fetchAllGalleryItems(Http, mapGalleryData)
);
export const searchGalleryByTagUseCase = SearchGalleryByTag(
	searchGalleryByTag(Http, mapGalleryData)
);
