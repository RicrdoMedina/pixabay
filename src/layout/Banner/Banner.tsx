'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import NavigationList from '@/components/NavigationList/NavigationList';
import SearchBarDropdown from '@/components/SearchBarDropdown/SearchBarDropdown';
import Button from '@/components/Button/Button';
import ContainerSwiper from '@/components/ContainerSwiper/ContainerSwiper';

const Banner = () => {
	const componentsToRender = [
		{
			component: Button,
			props: {
				label: 'Explore',
				className:
					'w-auto h-10 px-4 bg-white flex items-center justify-center text-regular font-sans font-bold text-sm rounded-3xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'Photos',
				className:
					'w-auto h-10 px-4 bg-transparent hover:bg-white-opacity-30 flex items-center justify-center text-white font-sans font-bold text-sm rounded-3xl',
				onClick: () => alert('Clicked!'),
			},
		},
	];

	const componentsCarousel = [
		{
			component: Button,
			props: {
				label: 'nature',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'background',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'wallperper',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'flowers',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'valentines',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'landscape',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'cat',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'business',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'sky',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'dog',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'money',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'nature',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'background',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'wallperper',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'flowers',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'valentines',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'landscape',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'cat',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'business',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'sky',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'dog',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'money',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'nature',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'background',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'wallperper',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'flowers',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'valentines',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'landscape',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'cat',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'business',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'sky',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'dog',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
		{
			component: Button,
			props: {
				label: 'money',
				className:
					'w-auto py-2 px-4 bg-[hsla(0,0%,100%,0.24)] backdrop-blur-[20px] hover:bg-[hsla(0,0%,100%,0.32)] ease-in-out transition-all duration-500 flex items-center justify-center text-white font-sans text-sm rounded-xl',
				onClick: () => alert('Clicked!'),
			},
		},
	];

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
						placeholder='Search for free Images, Videos, Music & more'
						dropdownButtonDisabled={true}
						colorIcon='white'
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
