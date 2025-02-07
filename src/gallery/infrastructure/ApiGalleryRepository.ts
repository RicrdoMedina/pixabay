
// src/gallery/infrastructure/ApiGalleryRepository.ts
import { GalleryRepository } from "../domain/GalleryRepository";
import { GalleryEntity } from "../domain/GalleryEntity";

export class ApiGalleryRepository implements GalleryRepository {
  private readonly API_URL = 'https://pixabay.com/api/?key=27867061-7a556f363885049d761c03182&q=yellow+flowers+red+nature+animals+blue+green+technology+people+city+abstract&image_type=photo';

  async getAll(): Promise<GalleryEntity[]> {
    const response = await fetch(`${this.API_URL}&image_type=photo`);
    const data = await response.json();
    return this.mapToGalleryEntities(data.hits);
  }

  async getById(id: string | number): Promise<GalleryEntity | null> {
    const allItems = await this.getAll();
    return allItems.find(item => item.id === id) || null;
  }

  async create(item: GalleryEntity): Promise<GalleryEntity> {
    throw new Error("Pixabay API no permite POST");
  }

  async update(id: string | number, item: Partial<GalleryEntity>): Promise<GalleryEntity | null> {
    throw new Error("Pixabay API no permite UPDATE");
  }

  async delete(id: string | number): Promise<boolean> {
    throw new Error("Pixabay API no permite DELETE");
  }

  async searchByTag(tag: string): Promise<GalleryEntity[]> {
    const response = await fetch(`${this.API_URL}&q=${tag}`);
    const data = await response.json();
    return this.mapToGalleryEntities(data.hits);
  }

  private mapToGalleryEntities(items: any[]): GalleryEntity[] {
    return items.map(item => ({
      id: item.id,
			name: item.tags,
			type: 'PHOTO',
			tags: item.tags.split(', '),
			previewURL: item.previewURL,
			previewWidth: item.previewWidth,
			previewHeight: item.previewHeight,
			webformatURL: item.webformatURL,
			webformatWidth: item.webformatWidth,
			webformatHeight: item.webformatHeight,
			largeImageURL: item.largeImageURL,
			fullHDURL: item.fullHDURL,
			imageURL: item.imageURL,
			imageWidth: item.imageWidth,
			imageHeight: item.imageHeight,
			imageSize: item.imageSize,
			views: item.views,
			downloads: item.downloads,
			likes: item.likes,
			comments: item.comments,
			user_id: item.user_id,
			user: item.user,
			userImageURL: item.userImageURL
    }));
  }
}
