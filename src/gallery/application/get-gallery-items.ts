import { GalleryEntity } from '@/gallery/domain/gallery-entity';
import { GalleryRepository } from '@/gallery/domain/gallery-repository';

export const makeGetGalleryItems =
  (repository: GalleryRepository) =>
  async (): Promise<GalleryEntity[]> =>
    repository.fetchAll();

