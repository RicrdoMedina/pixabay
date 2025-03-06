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
import { galleryStyles } from '@/config/home/galleryStyles';
import { HeartIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import MedalIcon from '@/components/Svg/MedalIcon';
import ImageCard from '@/components/ImageCard/ImageCard';
import ImageActionsOverlay from '@/components/MasonryGallery/ImageActionsOverlay';
import { tooltipConfig } from '@/interfaces';

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
		galleryStyles.button.default,
		galleryStyles.button.inactive,
		galleryStyles.button.active,
		Button,
		ButtonBuilder,
		handleClick
	);

	const tooltipToRender: tooltipConfig[] = [
		{
			id: '1',
			content: 'Like',
			place: 'bottom',
			icon: HeartIcon,
			iconClassName: galleryStyles.tooltip.fav.icon,
			onClick: () => undefined,
			className: galleryStyles.tooltip.fav.default,
		},
		{
			id: '2',
			content: 'Add to collection',
			place: 'bottom',
			icon: BookmarkIcon,
			iconClassName: galleryStyles.tooltip.add.icon,
			onClick: () => undefined,
			className: galleryStyles.tooltip.add.default,
		},
		{
			id: '3',
			content: "Edit's Choice",
			place: 'bottom',
			icon: MedalIcon,
			iconClassName: galleryStyles.tooltip.edit.icon,
			onClick: () => undefined,
			className: galleryStyles.tooltip.edit.default,
		},
	];

	function handleClick(id: number) {
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
				<MasonryGallery
					items={items}
					renderItem={item => (
						<ImageCard
							image={item}
							overlay={<ImageActionsOverlay tooltips={tooltipToRender} />}
						/>
					)}
					className="columns md:columns-2 lg:columns-3 xl:columns-4 gap-4"
				/>
			</div>
			<Button
				className="flex items-center justify-center border text-sm border-light hover:border-bold py-2 px-4 text-light hover:text-bold font-sans font-semibold rounded-full mx-auto mb-2 z-20 relative hover:bg-[rgba(25,27,38,0.04)] ease-in-out transition-all duration-500"
				label="Discover more"
			/>
			<div className="absolute bottom-0 left-0 w-full flex items-end justify-center p-6 h-48 z-10 bg-gradient-to-b from-transparent to-white"></div>
		</section>
	);
};

export default WrapperGallery;
