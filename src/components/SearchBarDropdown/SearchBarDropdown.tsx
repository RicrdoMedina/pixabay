'use client';

import SearchDropdownIcon from '@/components/SearchBarDropdown/SearchDropdownIcon';
import SearchDropdownInput from '@/components/SearchBarDropdown/SearchDropdownInput';
import Dropdown from '@/components/Dropdown/Dropdown';

type SearchBarDropdownProps = {
	className: string;
	classNameInput: string;
	placeholder?: string;
	colorIcon?:string,
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	dropdownButtonDisabled?: boolean;
};

const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({
	className = 'w-full',
	classNameInput = 'w-full',
	placeholder = '',
	colorIcon = 'currentColor',
	onChange,
	onClick,
	dropdownButtonDisabled = false,
}) => {
	return (
		<div className={className}>
			<span className="w-8 flex-grow-0">
				<SearchDropdownIcon color={colorIcon}/>
			</span>
			<div className="flex-grow h-full">
				<SearchDropdownInput
					className={classNameInput}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</div>
			{!dropdownButtonDisabled && (
				<div className="w-auto h-full flex-grow-0">
					<Dropdown
						className="w-auto h-full flex items-center"
						classNameButton="w-auto h-full px-4 whitespace-nowrap bg-transparent border border-black flex items-center justify-center text-sm font-sans text-regular font-bold outline-0 border-none ease-in-out transition-all duration-500 rounded-full hover:bg-custom-gray-300"
						open={false}
						onClick={onClick}
					/>
				</div>
			)}
		</div>
	);
};

export default SearchBarDropdown;
