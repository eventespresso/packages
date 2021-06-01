import type { DraggableProvidedDragHandleProps, OptionsType } from '@eventespresso/adapters';

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

export interface FormElement {
	UUID: string;
	adminLabel?: string;
	adminOnly?: boolean;
	belongsTo: string;
	customCss?: string;
	helpClass?: string;
	helpText?: string;
	htmlClass?: string;
	inputClass?: string;
	labelClass?: string;
	max?: number;
	min?: number;
	options?: OptionsType;
	order: number;
	placeholder?: string;
	publicLabel?: string;
	relation?: string;
	required?: boolean;
	requiredText?: string;
	status?: string;
	type: ElementType;
	wpUser?: number;
}

export type FormSectionStatus = 'active' | 'archived' | 'default' | 'shared' | 'trashed';

export interface FormSection {
	UUID: string;
	adminLabel?: string;
	appliesTo?: string;
	belongsTo?: string;
	customCss?: string;
	description?: string;
	htmlClass?: string;
	name: string;
	order: number;
	relation?: string;
	showName?: boolean;
	showDescription?: boolean;
	status?: FormSectionStatus;
	wpUser?: number;
}

export interface FormBuilderProps {
	bodyClassName?: string;
	containerClassName?: string;
	contentClassName?: string;
	header?: React.ReactNode;
	sidebarClassName?: string;
}

interface CommonProps {
	index?: number;
}

export interface FormElementProps extends CommonProps {
	element: FormElement;
}

export interface FormElementToolbarProps extends FormElementProps {
	dragHandleProps: DraggableProvidedDragHandleProps;
}

export interface FormSectionProps extends CommonProps {
	formSection: FormSection;
}

export interface FormSectionToolbarProps extends FormSectionProps {
	dragHandleProps: DraggableProvidedDragHandleProps;
}

export interface SettingsProps {
	element?: FormElement;
	formSection?: FormSection;
}
