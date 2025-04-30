'use client';

import React from 'react';
import { FormSchema, FormField } from '@/interfaces';
import Input from '@/components/Form/Input/Input';
import { useDynamicForm } from '@/hooks/useDynamicForm';

type DynamicFormProps = {
	schema: FormSchema;
	onSubmit: (values: Record<string, any>) => void;
	className?: string;
	btnClassName: string;
	btnLabel: string;
};

const DynamicForm: React.FC<DynamicFormProps> = ({
	schema,
	onSubmit,
	className,
	btnClassName,
	btnLabel,
}) => {
  const {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  } = useDynamicForm(schema, onSubmit);

	const renderField = (field: FormField) => {
		const value = values[field.name] || '';
		const error = submitted ? errors[field.name] : null;

		const commonProps = {
			name: field.name,
			required: field.required,
			placeholder: field.placeholder,
			onChange: handleChange,
			className: field.className,
		};

		if (field.type === 'select') {
			return (
				<select {...(commonProps as any)}>
					<option value="">Seleccione...</option>
					{field.options?.map(opt => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>
			);
		}

		return (
			<Input
				key={field.name}
				name={field.name}
				type={field.type}
				placeholder={field.placeholder}
				required={field.required}
				className={field.className}
				iconLeft={field.iconLeft}
				iconRight={field.iconRight}
				wrapperClass={field.wrapperClass}
				validations={field.validations}
				error={error}
				onChange={handleChange}
        value={value}
			/>
		);
	};

	return (
		<form onSubmit={handleSubmit} className={className}>
			{schema.map(field => (
				<div key={field.name} className={`mb-4 ${field.wrapperClass ?? ''}`}>
					<label className={field.labelClass}>{field.label}</label>
					{renderField(field)}
				</div>
			))}
			<button type="submit" className={btnClassName}>
				{btnLabel}
			</button>
		</form>
	);
};

export default DynamicForm;
