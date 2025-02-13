import { GalleryEntity } from "@/gallery/domain/gallery.entity";
import { mapGalleryData } from "@/gallery/infrastructure/gallery.mapper";

export const fetchAllGalleryItems = (http: { get: (url: string) => Promise<any> }) => 
  async (): Promise<GalleryEntity[]> => {
    try {
      const response = await http.get("/");
      if (!response || response.status !== 200) throw new Error(`Error: ${response.statusText}`);
      return mapGalleryData(response.data.data);
    } catch (error) {
      console.error("Error obteniendo imágenes:", error);
      return [];
    }
  };

export const searchGalleryByTag = (http: { get: (url: string) => Promise<any> }) => 
  async (tag: string): Promise<GalleryEntity[]> => {
    try {
      const response = await http.get(`/?tag=${tag}`);
      if (!response || response.status !== 200) throw new Error(`Error: ${response.statusText}`);
      return mapGalleryData(response.data.data);
    } catch (error) {
      console.error(`Error buscando imágenes con el tag ${tag}:`, error);
      return [];
    }
  };
