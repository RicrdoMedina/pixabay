"use server";

import { GalleryEntity } from "@/gallery/domain/GalleryEntity";

export async function getGalleryActions(
  getGalleryItemsUseCase: () => Promise<GalleryEntity[]>
): Promise<GalleryEntity[]> {
  try {
    return await getGalleryItemsUseCase();
  } catch (error) {
    console.error("Error: Could not get images", error);
    return [];
  }
}
