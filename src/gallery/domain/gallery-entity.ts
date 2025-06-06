export interface GalleryEntity {
	id: number;
	type: string;
	url: string;
	tags: string;
	previewURL: string;
	previewWidth: number;
	previewHeight: number;
	webformatURL: string;
	webformatWidth: number;
	webformatHeight: number;
	largeImageURL: string;
	fullHDURL: string;
	imageURL: string;
	imageWidth: number;
	imageHeight: number;
	imageSize: number;
	views: number;
	downloads: number;
	likes: number;
	comments: number;
	user_id: number;
	user: string;
	userImageURL: string;
	pageURL: string;
	collections: number
	verified: boolean
}
