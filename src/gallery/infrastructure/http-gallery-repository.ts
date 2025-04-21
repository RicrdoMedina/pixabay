import type { GalleryRepository } from '@/gallery/domain/gallery-repository';
import type { GalleryEntity } from '@/gallery/domain/gallery-entity';
import type { ApiClient } from '@/lib/api-client';
import { mapGalleryData } from './gallery-mapper';

export const createHttpGalleryRepository = (
	api: ApiClient
): GalleryRepository => ({
  
	fetchAll: async (): Promise<GalleryEntity[]> => {
		try {
			const res = await api.get('/gallery');
			const hits = res.data?.data?.hits ?? [];
			return mapGalleryData(hits);
		} catch {
			return [];
		}
	},

  // fetchById: async (id: number): Promise<GalleryEntity[]> => {
	// 	try {
  //     const res = await api.get(`/gallery/${id}`);
	// 		const hits = res.data?.data?.hits ?? [];
	// 		return mapGalleryData(hits);
	// 	} catch {
	// 		return [];
	// 	}
	// },


	// searchByTag: async (tag: string): Promise<GalleryEntity[]> => {
	// 	try {
	// 		const res = await api.get(`/gallery/?${tag}`);
	// 		const hits = res.data?.data?.hits ?? [];
	// 		return mapGalleryData(hits);
	// 	} catch {
	// 		return [];
	// 	}
	// },
});
