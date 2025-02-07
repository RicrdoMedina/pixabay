type SearchDropdownInputProps = {
	className: string;
	placeholder: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchDropdownInput: React.FC<SearchDropdownInputProps> = ({
	className,
	placeholder,
	onChange,
}) => {
	return (
		<input
			className={className}
			placeholder={placeholder}
			type="text"
			onChange={onChange}
		/>
	);
};

export default SearchDropdownInput;
