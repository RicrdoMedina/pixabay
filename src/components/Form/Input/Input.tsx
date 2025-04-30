'use client';

import { FieldValidation } from '@/interfaces';

type InputFieldProps = {
	name: string;
	type: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	validations?: FieldValidation[];
	onChange: (name: string, value: string) => void;
	wrapperClass?: string;
	error?: string | null;
	value: string;
};

const InputField: React.FC<InputFieldProps> = ({
	name,
	type,
	placeholder,
	required,
	className = '',
	iconLeft,
	iconRight,
	wrapperClass,
	onChange,
	error,
	value,
}) => {
	return (
		<div className={wrapperClass}>
			<div className="w-full relative">
				{iconLeft && (
					<span className="absolute left-3 top-1/2 -translate-y-1/2">
						{iconLeft}
					</span>
				)}{' '}
				<input
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(name, e.target.value)}
					className={className}
				/>
				{iconRight && (
					<span className="absolute right-3 top-1/2 -translate-y-1/2">
						{iconRight}
					</span>
				)}
			</div>

			{error && <p className="text-red-500 text-sm mt-1 pl-1">{error}</p>}
		</div>
	);
};

export default InputField;
