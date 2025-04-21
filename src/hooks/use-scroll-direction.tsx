'use client';
import { useEffect, useState } from 'react';

const useScrollDirection = (threshold: number) => {
	const [isScrollingDown, setIsScrollingDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrollingDown(currentScrollY > threshold);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [threshold]);

  return isScrollingDown
};

export default useScrollDirection;
