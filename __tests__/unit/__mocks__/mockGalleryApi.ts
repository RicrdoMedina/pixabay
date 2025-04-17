import { GalleryEntity } from '@/gallery/domain/GalleryEntity';

const mockGalleryApi: Omit<GalleryEntity, "url" | "verified" | "fullHDURL" | "imageURL">[] = [
	{
		id: 9435827,
		pageURL:
			'https://pixabay.com/photos/sunset-mountain-castle-sun-clouds-9435827/',
		type: 'photo',
		tags: 'sunset, mountain, castle, sun, clouds, nature, landscape',
		previewURL:
			'https://cdn.pixabay.com/photo/2025/02/27/18/38/sunset-9435827_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/gd4fd7c94ae093587c225fa2c83db19835fdb505b41362387e091fb93f21fa90a3bbeed44f689ab155ea36b5ec1f0f6e842fcf687bf8e84a0eef61acf0e32fa1c_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/gf9614772e4b3840fbf7099e0c95069a0c196317f7fbbe773d6e4208d45baa1331d70360f854e3ba5839944da36ce2204625643cd940575e308e41efb6aaf8b63_1280.jpg',
		imageWidth: 7087,
		imageHeight: 4724,
		imageSize: 5669114,
		views: 4195,
		downloads: 3828,
		collections: 7,
		likes: 71,
		comments: 24,
		user_id: 3764790,
		user: 'ELG21',
		userImageURL:
			'https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg',
	},
	{
		id: 9447133,
		pageURL:
			'https://pixabay.com/photos/eurasier-aloha-puppy-doggie-dog-9447133/',
		type: 'photo',
		tags: 'eurasier aloha puppy, doggie, dog, doggy, pet, animal, nature, adorable, canine',
		previewURL:
			'https://cdn.pixabay.com/photo/2025/03/04/22/26/eurasier-aloha-puppy-9447133_150.jpg',
		previewWidth: 150,
		previewHeight: 100,
		webformatURL:
			'https://pixabay.com/get/gedc45daabab6e98e9d6c57ba8770afd86806613ace002beeccc3fc8e3a15df836b0ecde91dc8f643a40529976bb35b9cc6cecfba75de323934e57f964de1eb2f_640.jpg',
		webformatWidth: 640,
		webformatHeight: 427,
		largeImageURL:
			'https://pixabay.com/get/gfb53c0fc7e2c7106652591e30d304fe1459f348a07a64ad1adb5cea1cc9979320807bf7297bb9f3fb8090b04a82e386f42901dfa1d4b97adfd6fc0accdc0a628_1280.jpg',
		imageWidth: 5177,
		imageHeight: 3456,
		imageSize: 2787103,
		views: 373,
		downloads: 331,
		collections: 2,
		likes: 29,
		comments: 11,
		user_id: 5602247,
		user: 'JACLOU-DL',
		userImageURL:
			'https://cdn.pixabay.com/user/2023/06/10/06-21-55-544_250x250.jpeg',
	},
	{
    id: 0,
    pageURL: 'https://pixabay.com/photos/horses-standing-hidden-head-curious-9446889/',
    type: 'photo',
    tags: '',
    previewURL: 'https://cdn.pixabay.com/photo/2025/03/04/19/39/horses-9446889_150.jpg',
    previewWidth: 105,
    previewHeight: 150,
    webformatURL: 'https://pixabay.com/get/g27083349c1b5d75444cb1d8a07641fad93518322c7f270894c7e640c6a3c79f62545bd6a3f7c22225a5e5ec597c59f44f7ab16933f6f884a7b71444cfa7c2799_640.jpg',
    webformatWidth: 448,
    webformatHeight: 640,
    largeImageURL: '',
    imageWidth: 2253,
    imageHeight: 3217,
    imageSize: 1799006,
    views: 577,
    downloads: 533,
    collections: 3,
    likes: 29,
    comments: 12,
    user_id: 7068951,
    user: 'ykaiavu',
    userImageURL: 'https://cdn.pixabay.com/user/2023/04/02/21-49-54-625_250x250.jpg'
  }
];

export default mockGalleryApi;
