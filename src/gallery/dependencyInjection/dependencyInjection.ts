import { ApiGalleryRepository } from "@/gallery/infrastructure/ApiGalleryRepository";
import { GalleryUseCase } from "@/gallery/application/GalleryUseCase";

const galleryRepository = new ApiGalleryRepository();
export const galleryUseCase = new GalleryUseCase(galleryRepository);
