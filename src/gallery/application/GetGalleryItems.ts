import { GalleryEntity } from "@/gallery/domain/gallery.entity";

export const GetGalleryItems = (fetchAll: () => Promise<GalleryEntity[]>) => async (): Promise<GalleryEntity[]> => {
  return await fetchAll();
};