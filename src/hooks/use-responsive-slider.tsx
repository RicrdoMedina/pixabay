'use client';

import { useEffect, useState, useMemo } from 'react';

interface BreakPointConfig {
	[key: number]: { itemsToShow: number; slidesPerGroup: number };
}

const useResponsiveSlider = (config: BreakPointConfig) => {
	const stableConfig = useMemo(() => config, []);

	const [settings, setSettings] = useState(() => {
		const width = typeof window !== 'undefined' ?  window.innerWidth : 0;
		let initialConfig = { itemsToShow: 1, slidesPerGroup: 1 };

		for (const breakPoint of Object.keys(stableConfig)
			.map(Number)
			.sort((a, b) => a - b)) {
			if (width >= breakPoint) {
				initialConfig = stableConfig[breakPoint];
			}
		}
		return initialConfig;
	});

	useEffect(() => {
		const updateSettings = () => {
			const width = window.innerWidth;
			let newConfig = { itemsToShow: 1, slidesPerGroup: 1 };

			for (const breakPoint of Object.keys(stableConfig)
				.map(Number)
				.sort((a, b) => a - b)) {
				if (width >= breakPoint) {
					newConfig = stableConfig[breakPoint];
				}
			}


			setSettings((prevSettings) =>
				JSON.stringify(prevSettings) === JSON.stringify(newConfig) ? prevSettings : newConfig
			);
		};

		updateSettings();
		window.addEventListener('resize', updateSettings);
		return () => window.removeEventListener('resize', updateSettings);
	}, [stableConfig]);

	return settings;
};

export default useResponsiveSlider;
