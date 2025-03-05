import Header from '@/layout/Header/Header';
import Banner from '@/layout/Banner/Banner';
import { getCategoryActions } from '@/actions/categoryActions';
import { getGalleryItemsUseCase } from '@/gallery/dependencyInjection/DependencyInjection';
import { getGalleryActions } from '@/actions/galleryActions';
import GalleryPage from '@/layout/WrapperGallery/GalleryPage/GalleryPage';
import { getCategoryItemsUseCase } from '@/category/dependencyInjection/DependencyInjection';
import { getSubCategoryActions } from '@/actions/subCategoryActions';
import { getSubCategoryItemsUseCase } from '@/subcategory/dependencyInjection/DependencyInjection';
import ParagraphWrapper from '@/components/ParagraphWrapper/ParagraphWrapper';
import Paragraph from '@/components/Paragraph/Paragraph';
import { HeartIcon } from '@heroicons/react/24/solid';
import Button from '@/components/Button/Button';
import Footer from '@/layout/Footer/Footer';

export default async function HomePage() {
	const [galleryItems, categoryItems, subCategoryItems] = await Promise.all([
		getGalleryActions(getGalleryItemsUseCase),
		getCategoryActions(getCategoryItemsUseCase),
		getSubCategoryActions(getSubCategoryItemsUseCase),
	]);

	return (
		<div className="w-full">
			<Header />
			<Banner
				categoryItems={categoryItems}
				subCategoryItems={subCategoryItems}
			/> 
			<main>
				<div className="w-full py-10 px-4 md:px-8 3xl:px-20">
					<div className="w-full hidden lg:block">
						<GalleryPage
							initialData={galleryItems}
							title="Over 5.3 million+ high quality stock images, videos and music shared
					by our talented community."
						/>
					</div>
					<div className="w-full block lg:hidden">
						<GalleryPage
							initialData={galleryItems}
							title="Stunning royalty-free images & royalty-free stock"
							subtitle="Over 5.3 million+ high quality stock images, videos and music shared by our talented community."
						/>
					</div>
				</div>
				<div className="w-full px-8 3xl:px-20">
					<div className="w-full border-t border-gray-200">
						<ParagraphWrapper
							className="w-full flex flex-col md:flex-row gap-4 items-start justify-between py-12 md:py-16"
							icon={HeartIcon}
							iconClassName="h-4 w-4 text-primary"
						>
							<div className="w-full">
								<Paragraph
									className="text-bold font-semibold text-base"
									text="Free media you can use anywhere"
								/>
								<Paragraph
									className="text-light text-base mt-3"
									text="Pixabay is a vibrant community of creatives, sharing royalty-free images, videos, audio and other media. All content is released by Pixabay under the Content License, which makes it safe to use without asking for permission or giving credit to the artist - even for certain commercial purposes."
								/>
								<Button
									className="text-primary mt-4 text-sm font-semibold hover:bg-green-100 rounded-md h-6 flex items-center justify-center px-2 cursor-pointer ease-in-out transition-all duration-500"
									label="Learn more about our license"
								/>
							</div>
						</ParagraphWrapper>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
