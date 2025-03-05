'use client';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const isMobile = () => {
			const width = window.innerWidth;

			setIsMobile(() => width < 769);
			setIsChecked(true);
		};

    isMobile()

		window.addEventListener('resize', isMobile);
		return () => window.removeEventListener('resize', isMobile);
	}, []);

	return { isMobile, isChecked };
};

export default useIsMobile