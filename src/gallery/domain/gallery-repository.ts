import { GalleryEntity } from './gallery-entity';

export interface GalleryRepository {
  fetchAll(): Promise<GalleryEntity[]>;
  //fetchById(id: number): Promise<GalleryEntity[]>;
  //searchByTag(tag: string): Promise<GalleryEntity[]>;
}