import type { DraggableProvidedDragHandleProps, OptionsType } from '@eventespresso/adapters';

export type ElementType =
	| 'button'
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

export type LocalOnlyFields = {
	// These are the purity flags which can be used for mutations
	isNew?: boolean;
	isModified?: boolean;
	hash?: string;
};

export interface FormElement extends LocalOnlyFields {
	id: string;
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
	// This is the current input value if needed.
	value?: any;
}

export type FormSectionStatus = 'active' | 'archived' | 'default' | 'shared' | 'trashed';

export interface FormSection extends LocalOnlyFields {
	id: string;
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

export interface FieldOptionProps extends CommonProps {
	label: React.ReactNode;
	onChange: (key: 'value' | 'label', index: number) => (value: string) => void;
	onRemove: (index: number) => VoidFunction;
	id: string;
	value: React.ReactText;
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
