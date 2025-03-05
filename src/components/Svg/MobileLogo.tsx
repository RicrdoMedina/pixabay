import React from 'react';
type MobileLogoProps = {
	width?: number;
	height?: number;
	currentColor?: string;
};

const MobileLogo: React.FC<MobileLogoProps> = ({
	currentColor= "currentColor",
	height,
	width,
}) => {
	return (
		<svg
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className=""
      width={width}
      height={height}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 3.333A3.333 3.333 0 013.333 0h33.334A3.333 3.333 0 0140 3.333v33.334A3.333 3.333 0 0136.667 40H3.333A3.333 3.333 0 010 36.667V3.333zm6.432 8.126c1.455-1.468 3.283-2.23 5.482-2.285 2.2.056 4.033.817 5.499 2.285 1.465 1.468 2.226 3.31 2.282 5.528-.056 2.22-.817 4.068-2.282 5.546-1.466 1.478-3.3 2.245-5.5 2.302H7.246v6.278H4.167V16.987c.054-2.218.81-4.06 2.265-5.528zm.813 5.528v4.744h4.669c1.345-.032 2.458-.492 3.337-1.378.879-.887 1.334-2.009 1.366-3.366-.032-1.34-.487-2.452-1.366-3.335-.88-.883-1.992-1.34-3.337-1.373-1.33.032-2.432.49-3.308 1.373-.875.883-1.329 1.995-1.361 3.335zm20.478 2.747l3.991 5.108h4.397l-6.516-8.02 5.965-7.655h-4.136l-3.657 4.786-3.28-4.786h-4.165l5.485 7.654-5.964 8.02h4.295l3.585-5.107z"
				fill={currentColor}
			></path>
		</svg>
	);
};

export default MobileLogo;
