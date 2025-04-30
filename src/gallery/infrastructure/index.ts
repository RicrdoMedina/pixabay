import { makeGetGalleryItems } from '@/gallery/application/get-gallery-items';
// import { makeSearchGalleryByTag } from '@/gallery/application/search-gallery-by-tag';
import { createHttpGalleryRepository } from '@/gallery/infrastructure/http-gallery-repository';
import { HttpClient } from '@/lib/http-client';

const galleryRepository = createHttpGalleryRepository(HttpClient);

export const getGalleryItemsUseCase = makeGetGalleryItems(galleryRepository);
// export const searchGalleryByTagUseCase = makeSearchGalleryByTag(galleryRepository);
