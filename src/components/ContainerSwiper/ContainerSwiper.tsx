import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '@/components/Button/Button';
import ArrowLeftIcon from '@/components/Svg/ArrowLeftIcon';
import ArrowRightIcon from '@/components/Svg/ArrowRightIcon';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type ComponentWithProps = {
	component: React.ElementType;
	props?: Record<string, any>;
};

type SwiperProps = {
	className?: string;
	itemsToShow: number;
	slidesPerGroup: number;
	components: ComponentWithProps[];
	navigation?: boolean;
	customNavigation?: boolean;
};

const ContainerSwiper: React.FC<SwiperProps> = ({
	className = 'container-swiper w-full relative flex',
	itemsToShow,
	components,
	slidesPerGroup,
	navigation = false,
	customNavigation = false,
}) => {
	const swiperRef = React.useRef<any>(null);
	const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
	const [isPrevDisabled, setIsPrevDisabled] = React.useState<boolean>(false);
	const [isNextDisabled, setIsNextDisabled] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (swiperRef.current) {
			const swiper = swiperRef.current.swiper;
			setSwiperInstance(swiper);

			setIsPrevDisabled(swiper.isBeginning);
			setIsNextDisabled(swiper.isEnd);

			swiper.on('slideChange', () => {
				setIsPrevDisabled(swiper.isBeginning);
				setIsNextDisabled(swiper.isEnd);
			});
		}
	}, []);

	const handleNext = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();
		}
	};

	const handlePrev = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();
		}
	};

	return (
		<div className={className} data-testid="swiper-container">
			<div className="w-full h-12 flex">
				<Swiper
					ref={swiperRef}
					onSwiper={swiper => setSwiperInstance(swiper)}
					slidesPerView={itemsToShow}
					spaceBetween={10}
					pagination={{ type: 'fraction' }}
					navigation={navigation}
					slidesPerGroup={slidesPerGroup}
					modules={[Navigation]}
				>
					{components.map(({ component: Component, props }, index) => (
						<SwiperSlide key={index} data-testid={`slide-${index}`}>
							<div className="w-full flex items-center justify-center">
								<Component {...props} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{customNavigation && !isPrevDisabled && (
					<Button
						onClick={handlePrev}
						className="absolute container-swiper__swiper-button-prev z-50 cursor-pointer w-10 h-10 rounded-full -left-10 top-1/2 transform -translate-y-1/2 p-2 ease-in-out transition-all duration-500 hidden md:flex"
						icon={<ArrowLeftIcon />}
						iconPosition="left"
					/>
				)}
				{customNavigation && !isNextDisabled && (
					<Button
						onClick={handleNext}
						className="absolute container-swiper__swiper-button-next z-50 cursor-pointer w-10 h-10 rounded-full -right-10 top-1/2 transform -translate-y-1/2  p-2 ease-in-out transition-all duration-500 hidden md:flex"
						icon={<ArrowRightIcon />}
						iconPosition="left"
					/>
				)}
			</div>
		</div>
	);
};

export default ContainerSwiper;
