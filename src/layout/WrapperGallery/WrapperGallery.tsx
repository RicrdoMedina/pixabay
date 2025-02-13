'use client';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';
import MasonryGallery from '@/components/MasonryGallery/MasonryGallery';
import NavigationList from '@/components/NavigationList/NavigationList';
import { GalleryEntity } from '@/gallery/domain/gallery.entity';

type WrapperGalleryProps = {
	items: GalleryEntity[];
	title: string;
};

const WrapperGallery: React.FC<WrapperGalleryProps> = ({ items, title }) => {
	const componentsToRender = [
		{
			component: Button,
			props: {
				label: "Editor's Choice",
				className:
					'w-auto h-10 px-4 flex items-center justify-center font-sans text-sm text-regular font-bold',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'Latest',
				className:
					'w-auto h-10 px-4 flex items-center justify-center font-sans text-sm text-regular font-bold',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'Trending',
				className:
					'w-auto h-10 px-4 flex items-center justify-center font-sans text-sm text-regular font-bold',
				onClick: () => alert('Clicked!'),
			},
		},
	];

	return (
		<section className="w-full">
			<div className="flex items-center justify-between">
				<Heading className="text-xl text-bold font-sans font-bold" level={2}>
					{title}
				</Heading>
				<NavigationList components={componentsToRender} />
			</div>
			<div className="w-full pt-4">
				<MasonryGallery items={items} />
			</div>
		</section>
	);
};

export default WrapperGallery;
