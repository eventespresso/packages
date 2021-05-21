import type { OptionsType } from '@eventespresso/adapters';

export type ElementType =
	| 'button'
	| 'checkbox'
	| 'checkbox-multi'
	| 'date'
	| 'datetime-local'
	| 'day-select'
	| 'decimal'
	| 'email'
	| 'email-confirmation'
	| 'formSection'
	| 'html'
	| 'integer'
	| 'month'
	| 'month-select'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'select'
	| 'select-country'
	| 'select-multi'
	| 'select-state'
	| 'switch'
	| 'tel'
	| 'text'
	| 'textarea'
	| 'textarea-html'
	| 'time'
	| 'url'
	| 'week'
	| 'year-select';

export type ElementBlock = {
	label: React.ReactNode;
	type: ElementType;
	desc: string;
};

export interface FormInput {
	UUID: string;
	relation?: string;
	adminLabel?: string;
	adminOnly?: boolean;
	belongsTo?: string;
	helpClass?: string;
	helpText?: string;
	htmlClass?: string;
	max?: number;
	min?: number;
	options?: OptionsType;
	order?: number;
	placeholder?: string;
	publicLabel: string;
	required?: boolean;
	requiredText?: string;
	status?: string;
	type: ElementType;
	wpUser?: number;
}

export interface FormSection {
	UUID: string;
	adminLabel: string;
	appliesTo: string;
	belongsTo: string;
	elements: Array<FormInput>;
	htmlClass: string;
	order: number;
	relation: string;
	status: string;
	wpUser: number;
}

export interface FormBuilderProps {
	bodyClassName?: string;
	containerClassName?: string;
	contentClassName?: string;
	header?: React.ReactNode;
	formSections: Array<FormSection>;
	sidebarClassName?: string;
}

export interface FormElementProps {
	active?: boolean;
	element: FormInput;
}

export interface FormSectionProps {
	active?: boolean;
	formSection: FormSection;
}

export interface SettingsProps {
	element?: FormInput;
	formSection?: FormSection;
	open: boolean;
}
