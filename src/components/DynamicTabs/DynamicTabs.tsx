'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

type TabItem = {
	label: string;
	component: React.ReactNode;
	onClick?: () => void;
};

type DynamicTabsProps = {
	tabs: TabItem[];
	initialIndex?: number;
	classNameTabs?: string;
	classNamePanel?: string;
};

const DynamicTabs: React.FC<DynamicTabsProps> = ({
	tabs,
	initialIndex = 0,
	classNameTabs = '',
	classNamePanel = '',
}) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	return (
		<div className="w-full max-w-80">
			<div
				className={`w-full flex items-center justify-center ${classNameTabs}`}
			>
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={classNames(
							'py-2 px-4 border-b transition flex-auto text-sm font-sans font-semibold cursor-pointer ease-in-out transition-all duration-500',
							{
								'border-primary text-bold': index === activeIndex,
								'border-custom-gray-500 text-custom-gray-500 hover:text-bold hover:border-bold':
									index !== activeIndex,
							}
						)}
						onClick={() => {
							setActiveIndex(index);
							tab.onClick?.();
						}}
						role="tab"
						aria-selected={index === activeIndex}
						aria-controls={`tab-panel-${index}`}
						id={`tab-${index}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div
				id={`tab-panel-${activeIndex}`}
				role="tabpanel"
				aria-labelledby={`tab-${activeIndex}`}
				className={`mt-4 ${classNamePanel}`}
			>
				{tabs[activeIndex].component}
			</div>
		</div>
	);
};

export default DynamicTabs;
