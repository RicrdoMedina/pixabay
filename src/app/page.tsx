import Header from '@/layout/Header/Header';
import Hero from '@/layout/Banner/Banner';
import { getGalleryItemsServer } from '@/actions/galleryActions';
import GalleryPage from '@/layout/WrapperGallery/GalleryPage/GalleryPage';

export default async function HomePage() {
	const galleryItems = await getGalleryItemsServer();

	return (
		<div className="w-full">
			<Header />
			<Hero />
			<main>
				<div className="w-full py-10 px-20">
					<GalleryPage
						initialData={galleryItems}
						title="Over 5.3 million+ high quality stock images, videos and music shared
					by our talented community."
					/>
				</div>
			</main>
		</div>
	);
}
