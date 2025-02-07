'use client';

import React from 'react';
import Button from '@/components/Button/Button';
import ArrowDownIcon from '@/components/Svg/ArrowDownIcon';

type DropdownProps = {
	className: string;
	classNameButton: string;
	open: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
	className = 'w-full flex items-center justify-center',
	classNameButton = 'w-full',
	open = false,
	onClick,
}) => {
	return (
		<div className={className}>
			<Button
				className={classNameButton}
				label="Todas las imagenes"
				onClick={onClick}
				icon={<ArrowDownIcon />}
				iconPosition="right"
			/>
		</div>
	);
};

export default Dropdown;
