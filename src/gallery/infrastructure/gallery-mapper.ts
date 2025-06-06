import { GalleryEntity } from '@/gallery/domain/gallery-entity';
import { isEmpty } from '@/lib/utils';

export const mapGalleryData = (apiResponse: any = []): GalleryEntity[] => {
  return apiResponse.map((item: any) => {
    const isValidImage =
      !isEmpty(item.largeImageURL) && !isEmpty(item.id) && !isEmpty(item.tags);
    
    const urlSplit = isValidImage
      ? item.tags
          .split(',')
          .slice(0, 4)
          .join('-')
          .toLowerCase()
          .replace(/\s+/g, '')
      : '';
    
    const url = isValidImage ? `/image/${urlSplit}-${item.id}` : '';

    return {
      id: item.id || 0,
      type: item.type || '',
      tags: item.tags || '',
      previewURL: item.previewURL || '',
      previewWidth: item.previewWidth || 0,
      previewHeight: item.previewHeight || 0,
      webformatURL: item.webformatURL || '',
      webformatWidth: item.webformatWidth || 0,
      webformatHeight: item.webformatHeight || 0,
      largeImageURL: item.largeImageURL || '',
      fullHDURL: item.fullHDURL || '',
      imageURL: item.imageURL || '',
      imageWidth: item.imageWidth || 0,
      imageHeight: item.imageHeight || 0,
      imageSize: item.imageSize || 0,
      views: item.views || 0,
      downloads: item.downloads || 0,
      likes: item.likes || 0,
      comments: item.comments || 0,
      user_id: item.user_id || 0,
      user: item.user || '',
      userImageURL: item.userImageURL || '',
      collections: item.collections || 0,
      pageURL: item.pageURL || '',
      url: url,
      verified: isValidImage,
    };
  });
};