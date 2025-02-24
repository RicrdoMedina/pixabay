import { GalleryEntity } from "./GalleryEntity";

export type FetchAllGalleryItems = () => Promise<GalleryEntity[]>;
export type FetchGalleryItemById = (id: number) => Promise<GalleryEntity | null>;
export type SearchGalleryByTag = (tag: string) => Promise<GalleryEntity[]>;
