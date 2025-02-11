"use server";

import { galleryUseCase } from "@/gallery/dependencyInjection/dependencyInjection";
import { GalleryEntity } from "@/gallery/domain/GalleryEntity";


export async function getGalleryItemsServer(): Promise<GalleryEntity[]> {
  return await galleryUseCase.getAll();
}
