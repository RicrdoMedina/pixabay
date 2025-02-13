import { fetchAllGalleryItems, searchGalleryByTag } from "@/gallery/infrastructure/gallery.operation";
import { GetGalleryItems } from "@/gallery/application/GetGalleryItems";
import { SearchGalleryByTag } from "@/gallery/application/SearchGalleryByTag";
import Http from "@/lib/Http";

export const getGalleryItemsUseCase = GetGalleryItems(fetchAllGalleryItems(Http));
export const searchGalleryByTagUseCase = SearchGalleryByTag(searchGalleryByTag(Http));
