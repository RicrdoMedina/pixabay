'use client';
import Heading from '@/components/Heading/Heading';
import MasonryGallery from '@/components/MasonryGallery/MasonryGallery';
import NavigationList from '@/components/NavigationList/NavigationList';
import { GalleryEntity } from '@/gallery/domain/GalleryEntity';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { selectSubFilter } from '@/store/slices/subFilterSlice';
import { mapItemsToButtons } from '@/lib/map/mapItemsToButtons';
import Button from '@/components/Button/Button';
import ButtonBuilder from '@/lib/Builder/ButtonBuilder';

type WrapperGalleryProps = {
	items: GalleryEntity[];
	title: string;
	subtitle?: string;
};

const WrapperGallery: React.FC<WrapperGalleryProps> = ({
	items,
	title,
	subtitle,
}) => {
	const dispatch = useDispatch<AppDispatch>();
	const { items: subFilters, selectedItem } = useSelector(
		(state: RootState) => state.subFilter
	);

	const componentsToRender = mapItemsToButtons(
		subFilters,
		selectedItem,
		'id',
		'name',
		'w-full md:w-auto py-1 md:py-0 px-3 md:px-4 rounded-full flex items-center justify-center font-sans text-sm text-regular font-bold h-8',
		'hover:bg-white',
		'bg-white text-black',
		Button,
		ButtonBuilder,
		handleClick
	);

	function handleClick(id:number) {
		dispatch(selectSubFilter(id));
	}

	return (
		<section className="w-full relative">
			<div className="flex flex-col gap-4 lg:flex-wrap lg:flex-row items-start md:items-center justify-between">
				<Heading
					className="text-2xl md:text-base 2xl:text-xl text-bold font-sans font-bold"
					level={2}
				>
					{title}
				</Heading>
				<Heading className="text-base text-light font-sans" level={4}>
					{subtitle}
				</Heading>
				<NavigationList
					components={componentsToRender}
					wrapperClasses="w-full md:w-auto"
					itemClasses="flex-grow flex-shrink-0"
					containerClasses="w-full md:w-auto flex items-center justify-center bg-gray-100 p-1 rounded-full"
				/>
			</div>
			<div
				className="w-full pt-4 overflow-hidden"
				style={{ maxHeight: '1112px' }}
			>
				<MasonryGallery items={items} />
			</div>
			<div className="absolute bottom-0 left-0 w-full flex items-end justify-center p-6 h-48 z-10 bg-gradient-to-b from-transparent to-white"></div>
		</section>
	);
};

export default WrapperGallery;
