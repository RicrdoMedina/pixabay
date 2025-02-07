import { BaseRepository } from "@/common/domain/BaseRepository";
import { GalleryEntity } from "@/gallery/domain/GalleryEntity";

export interface GalleryRepository extends BaseRepository<GalleryEntity> {
  searchByTag(tag: string): Promise<GalleryEntity[]>;
}