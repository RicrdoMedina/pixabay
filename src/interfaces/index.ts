import ButtonBuilder from '@/lib/builder/button-builder';
import { ReactNode } from 'react';

type PlacesType =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end';

export interface tooltipConfig {
	id: string;
	content: string;
	place: PlacesType;
	icon: React.ComponentType<any>;
	iconClassName: string;
	onClick: () => void;
	className: string;
}

export interface ISubFiler {
	id: number;
	name: string;
	slug: string;
}

export interface IMapButtonsConfig<T> {
	items: T[];
	selectedItem: number;
	idKey: keyof T;
	nameKey: keyof T;
	styles: {
		default: string;
		inactive: string;
		active: string;
	};
	ButtonComponent: React.ComponentType<any>;
	ButtonBuilderClass: new (...args: any[]) => ButtonBuilder;
	onClick: (id: number) => void;
}

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'select';

export interface FieldOption {
	label: string;
	value: string | number;
}

export interface FieldValidation {
  regex: RegExp;
  message: string;
}

export interface FormField {
	name: string;
	label: string;
	labelClass: string;
	className: string;
	wrapperClass?: string;
	type: FieldType;
	required?: boolean;
	placeholder?: string;
	options?: FieldOption[];
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
  validations?: FieldValidation[];
  defaultValue?: string;
}

export type FormSchema = FormField[];
