'use client';
import React from 'react';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import NavigationList from '@/components/NavigationList/NavigationList';
import SearchBarDropdown from '@/components/SearchBarDropdown/SearchBarDropdown';
import ContainerSwiper from '@/components/ContainerSwiper/ContainerSwiper';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import { mapCategoriesToButtons } from '@/lib/map/mapCategoriesToButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { selectCategory } from '@/store/slices/categorySlice';
import { selectSubCategory } from '@/store/slices/subCategorySlice';
import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';

type BannerProps = {
	categoryItems: CategoryEntity[];
	subCategoryItems: SubCategoryEntity[];
};

const Banner: React.FC<BannerProps> = ({ categoryItems, subCategoryItems }) => {
	const dispatch = useDispatch<AppDispatch>();
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedItem
	);

	const selectedSubCategory = useSelector(
		(state: RootState) => state.subCategory.selectedItem
	);

	const componentsToRender = mapCategoriesToButtons(
		categoryItems,
		selectedCategory,
		'w-auto h-10 mx-1 px-4 flex items-center justify-center text-regular font-sans font-bold text-sm rounded-3xl ease-in-out transition-all duration-500',
		'w-auto h-10 mx-1 px-4 bg-transparent hover:bg-white-opacity-30 flex items-center justify-center text-white font-sans font-bold text-sm rounded-3xl',
		'bg-white',
		handleCategoryClick
	);

	const componentsCarousel = mapCategoriesToButtons(
		subCategoryItems,
		selectedSubCategory,
		'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
		'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
		'',
		handleSubCategoryClick
	);

	function handleCategoryClick(categoryId: number) {
		dispatch(selectCategory(categoryId));
	}

	function handleSubCategoryClick(subCategoryId: number) {
		dispatch(selectSubCategory(subCategoryId));
	}

	return (
		<section className="w-full relative py-32 px-24">
			<div className="w-full flex flex-col items-center justify-center z-20 relative max-w-screen-lg mx-auto">
				<Heading className="text-white text-4xl font-sans font-bold" level={1}>
					Stunning royalty-free images & royalty-free stock
				</Heading>
				<div className="w-full mt-4 flex items-center justify-center">
					<NavigationList components={componentsToRender} />
				</div>
				<div className="w-full my-4">
					<SearchBarDropdown
						className="bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 pl-4  h-14 rounded-full flex items-center justify-center"
						classNameInput="w-full h-full border-none outline-none bg-transparent text-white font-sans"
						placeholder="Search for free Images, Videos, Music & more"
						dropdownButtonDisabled={true}
						colorIcon="white"
					/>
				</div>
				<div className="w-full relative">
					<ContainerSwiper
						className="container-swiper container-swiper__banner w-full relative flex"
						components={componentsCarousel}
						itemsToShow={9}
						slidesPerGroup={8}
						customNavigation={true}
					/>
				</div>
			</div>

			<div className="w-full h-full absolute top-0 left-0 overflow-hidden z-10 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-20">
				<Image
					src="/banner-bg-large.webp"
					alt="Free mixed hero backgrounds"
					width={1440}
					height={550}
					layout="responsive"
					sizes="(max-width: 640px) 640px, (min-width: 641px) 1440px"
					srcSet="/banner-bg-small.jpg 640w, /banner-bg-large.webp 1440w"
				/>
			</div>
		</section>
	);
};

export default Banner;
