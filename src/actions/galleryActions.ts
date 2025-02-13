"use server";

import { getGalleryItemsUseCase } from "@/gallery/dependencyInjection/dependency.injection";
import { GalleryEntity } from "@/gallery/domain/gallery.entity";

export async function getGalleryItemsServer(): Promise<GalleryEntity[]> {
  try {
    return await getGalleryItemsUseCase();
  } catch (error) {
    console.error("Error obteniendo imágenes del servidor:", error);
    return [];
  }
}
