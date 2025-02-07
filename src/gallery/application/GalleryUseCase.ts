import { GalleryRepository } from "../domain/GalleryRepository";

export class GalleryUseCase {
  constructor(private galleryRepository: GalleryRepository) {}

  async getAll() {
    return await this.galleryRepository.getAll();
  }

  async getById(id: string | number) {
    return await this.galleryRepository.getById(id);
  }

  async searchByTag(tag: string) {
    return await this.galleryRepository.searchByTag(tag);
  }
}