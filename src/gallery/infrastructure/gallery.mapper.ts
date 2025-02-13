import { GalleryEntity } from "@/gallery/domain/gallery.entity";

export const mapGalleryData = (apiResponse: any): GalleryEntity[] => {
  return apiResponse.hits.map((item: any) => ({
    id: item.id,
    name: item.tags || "Sin nombre",
    type: item.type?.toUpperCase() || "PHOTO",
    tags: item.tags.split(", ") || [],
    previewURL: item.previewURL || "",
    previewWidth: item.previewWidth || 0,
    previewHeight: item.previewHeight || 0,
    webformatURL: item.webformatURL || "",
    webformatWidth: item.webformatWidth || 0,
    webformatHeight: item.webformatHeight || 0,
    largeImageURL: item.largeImageURL || "",
    fullHDURL: item.fullHDURL || "",
    imageURL: item.imageURL || "",
    imageWidth: item.imageWidth || 0,
    imageHeight: item.imageHeight || 0,
    imageSize: item.imageSize || 0,
    views: item.views || 0,
    downloads: item.downloads || 0,
    likes: item.likes || 0,
    comments: item.comments || 0,
    user_id: item.user_id || 0,
    user: item.user || "Anónimo",
    userImageURL: item.userImageURL || "",
  }));
};
