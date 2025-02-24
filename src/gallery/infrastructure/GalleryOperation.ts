import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

export const fetchAllGalleryItems =
	(
		http: { get: (url: string) => Promise<any> },
		mapGalleryData: (data: any) => GalleryEntity[]
	) =>
	async (): Promise<GalleryEntity[]> => {
		try {
			const response = await http.get('/gallery');
			if (!response || response.status !== 200)
				throw new Error(`Error: ${response.statusText}`);
			const data = response.data?.data;
			const hits = data?.hits ?? [];
			return mapGalleryData(hits);
		} catch (error) {
			console.error('Error obteniendo imágenes:', error);
			return [];
		}
	};

export const searchGalleryByTag =
	(
		http: { get: (url: string) => Promise<any> },
		mapGalleryData: (data: any) => GalleryEntity[]
	) =>
	async (params: string): Promise<GalleryEntity[]> => {
		try {
			const response = await http.get(`/gallery/?${params}`);
			if (!response || response.status !== 200)
				throw new Error(`Error: ${response.statusText}`);
			const data = response.data?.data;
			const hits = data?.hits ?? [];
			return mapGalleryData(hits);
		} catch (error) {
			console.error(`Error buscando imágenes con el ${params}:`, error);
			return [];
		}
	};
