import { GalleryRepository } from "../domain/GalleryRepository";

export class GetGalleryItems {
  constructor(private galleryRepository: GalleryRepository) {}

  async execute() {
    return await this.galleryRepository.getAll();
  }
}
