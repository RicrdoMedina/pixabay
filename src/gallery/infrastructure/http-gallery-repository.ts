import type { GalleryRepository } from '@/gallery/domain/gallery-repository';
import type { GalleryEntity } from '@/gallery/domain/gallery-entity';
import type { ApiClient } from '@/lib/api-client';
import { mapGalleryData } from './gallery-mapper';

export const createHttpGalleryRepository =
  (api: ApiClient): GalleryRepository => ({
    fetchAll: async (): Promise<GalleryEntity[]> => {
      const res = await api.get('/gallery');
      const hits = res.data?.data?.hits ?? [];
      return mapGalleryData(hits);
    },

    fetchById: async (id: number): Promise<GalleryEntity | null> => {
      const res = await api.get(`/gallery/${id}`);
      const items = mapGalleryData([res.data?.data]);
      return items[0] ?? null;
    },

    searchByTag: async (tag: string): Promise<GalleryEntity[]> => {
      const res = await api.get(`/gallery/?${tag}`);
      const hits = res.data?.data?.hits ?? [];
      return mapGalleryData(hits);
    },
  });