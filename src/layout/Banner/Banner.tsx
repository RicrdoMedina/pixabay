'use client';
import React from 'react';
import {
	categorySwiperConfig,
	subCategorySwiperConfig,
} from '@/config/swiperConfig';
import Heading from '@/components/Heading/Heading';
import NavigationList from '@/components/NavigationList/NavigationList';
import SearchBarDropdown from '@/components/SearchBarDropdown/SearchBarDropdown';
import ContainerSwiper from '@/components/ContainerSwiper/ContainerSwiper';
import { CategoryEntity } from '@/category/domain/CategoryEntity';
import ButtonBuilder from '@/lib/Builder/ButtonBuilder';
import { mapItemsToButtons } from '@/lib/map/mapItemsToButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { selectCategory } from '@/store/slices/categorySlice';
import { selectSubCategory } from '@/store/slices/subCategorySlice';
import { SubCategoryEntity } from '@/subcategory/domain/SubCategoryEntity';
import useResponsiveSlider from '@/hooks/useResponsiveSlider';
import ResponsivePicture from '@/components/ResponsivePicture/ResponsivePicture';
import Button from '@/components/Button/Button';


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

	const componentsToRender = mapItemsToButtons(
		categoryItems,
		selectedCategory,
		"categoryId",
		"categoryName",
		'w-auto h-10 mx-1 px-4 bg-transparent flex items-center justify-center font-sans font-bold text-sm rounded-3xl whitespace-nowrap',
		'text-white hover:bg-white-opacity-30',
		'bg-white text-black',
		Button,
		ButtonBuilder,
		handleCategoryClick
	);


	const componentsSlider = mapItemsToButtons(
		subCategoryItems,
		selectedSubCategory,
		"subCategoryId",
		"subCategoryName",
		'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
		'',
		'',
		Button,
		ButtonBuilder,
		handleSubCategoryClick
	);

	const subCategorySwiper = useResponsiveSlider(subCategorySwiperConfig);

	const categorySwiper = useResponsiveSlider(categorySwiperConfig);

	function handleCategoryClick(categoryId: number) {
		dispatch(selectCategory(categoryId));
	}

	function handleSubCategoryClick(subCategoryId: number) {
		dispatch(selectSubCategory(subCategoryId));
	}

	return (
		<section className="w-full relative py-12 md:py-20 lg:py-32 px-4 md:px-24 select-none">
			<div className="w-full flex flex-col items-center justify-center z-20 relative max-w-screen-lg md:mx-auto">
				<Heading
					className="text-white text-4xl font-sans font-bold hidden lg:flex"
					level={1}
				>
					Stunning royalty-free images & royalty-free stock
				</Heading>
				<div className="w-full mt-4 flex items-center justify-center">
					<NavigationList
						components={componentsToRender}
						wrapperClasses="hidden md:flex"
						containerClasses="flex items-start justify-between"
					/>
					<ContainerSwiper
						className="container-swiper container-swiper__banner w-full relative flex md:hidden"
						components={componentsToRender}
						itemsToShow={categorySwiper.itemsToShow}
						slidesPerGroup={categorySwiper.slidesPerGroup}
						customNavigation={false}
					/>
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
						components={componentsSlider}
						itemsToShow={subCategorySwiper.itemsToShow}
						slidesPerGroup={subCategorySwiper.slidesPerGroup}
						customNavigation={true}
					/>
				</div>
			</div>

			<div className="w-full select-none h-full absolute top-0 left-0 overflow-hidden z-10 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-20">
				<ResponsivePicture
					sources={[
						{
							srcSet:
								'https://cdn.pixabay.com/index/2025/02/24/08-54-42-37_1920x550.jpg',
							media: '(min-width: 1440px)',
						},
						{
							srcSet:
								'https://cdn.pixabay.com/index/2025/02/24/08-54-42-37_640.jpg',
							media: '(max-width: 640px)',
						},
					]}
					imgSrc="https://cdn.pixabay.com/index/2025/02/24/08-54-42-37_1440x550.jpg"
					alt="Free mixed hero backgrounds"
				/>
			</div>
		</section>
	);
};

export default Banner;
