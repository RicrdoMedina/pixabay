import Header from '@/layout/Header/Header';
import Hero from '@/layout/Banner/Banner';
import WrapperGallery from '@/layout/WrapperGallery/WrapperGallery';
import { galleryUseCase } from "@/gallery/dependencyInjection/dependencyInjection";

export default async function HomePage() {
  const galleryItems = await galleryUseCase.getAll();

	return (
		<div className="w-full">
			<Header />
			<Hero />
			<main>
				<div className="w-full py-10 px-20">
					<WrapperGallery items={galleryItems} />
				</div>
			</main>
		</div>
	);
}