import type React from 'react';
import type { FormRenderProps, FormProps, FieldRenderProps, FieldProps as RFFFieldProps } from 'react-final-form';
import type { FieldArrayProps } from 'react-final-form-arrays';
import type { FormState, AnyObject } from 'final-form';

import type { ButtonProps, FormControlProps, OptionsType } from '@eventespresso/adapters';
import type { FormConfigProviderProps } from './context';

export interface FormButtonProps extends ButtonProps {
	buttonText?: string;
}

export interface FormConfig {
	locale?: string;
	dateFormat?: string;
	timeFormat?: string;
	dateTimeFormat?: string;
}

interface AdditionalFormProps<FormValues = AnyObject> extends FormConfigProviderProps {
	sections?: SectionList<FormValues>;
	fields?: FieldList<FormValues>;
	submitButton?: FormButtonProps;
	resetButton?: FormButtonProps;
	formWrapper?: React.ComponentType<FormRenderProps<FormValues>>;
	debugFields?: Array<keyof FormState<any>>; // The fields from RFF form state to display in debug
}

export interface AdditionalFieldProps<FormValues = AnyObject> {
	label?: React.ReactNode | string;
	fieldType:
		| 'datepicker'
		| 'datetimepicker'
		| 'group'
		| 'hidden'
		| 'multicheck'
		| 'number'
		| 'radio'
		| 'rich-text-editor'
		| 'select'
		| 'switch'
		| 'text'
		| 'textarea'
		| 'timepicker';
	htmlType?: string;
	before?: React.ReactNode | string;
	after?: React.ReactNode | string;
	description?: React.ReactNode | string;
	subFields?: FieldList<FormValues>;
	options?: OptionsType;
	isRepeatable?: boolean;
	conditions?: FieldConditions;
	formControlProps?: FormControlProps;
	parseAsInfinity?: boolean;
	width?: 'small' | 'full';
	[key: string]: any;
}

export interface FieldCondition {
	field: string;
	compare:
		| '='
		| '!='
		| '!='
		| '>'
		| '>='
		| '<'
		| '<='
		| 'EMPTY'
		| 'NOT_EMPTY'
		| 'CONTAINS'
		| 'NOT_CONTAINS'
		| 'MATCHES'
		| 'NOT_MATCHES';
	value?: any;
}

export type FieldConditions = Array<FieldCondition>;

export interface EspressoFormProps<FormValues = AnyObject>
	extends FormProps<FormValues>,
		AdditionalFormProps<FormValues> {}

export interface FormRendererProps<FormValues = AnyObject>
	extends FormRenderProps<FormValues>,
		AdditionalFormProps<FormValues> {}

export interface FieldRendererProps<FieldValue = any>
	extends FieldRenderProps<FieldValue>,
		FieldProps<AnyObject, FieldValue> {}

export interface RepeatableRendererProps<FieldValue = any>
	extends FieldArrayProps<FieldValue, any>,
		AdditionalFieldProps<AnyObject> {}

export interface FieldProps<FormValues = AnyObject, FieldValue = any>
	extends AdditionalFieldProps<FormValues>,
		RFFFieldProps<FieldValue, FieldRendererProps> {
	name: string & keyof FormValues;
}

export type FormValuesShape = {
	[key: string]: any;
};

export interface SubmitProps extends Pick<AdditionalFormProps, 'submitButton' | 'resetButton'> {
	submitting: boolean;
}

export interface RenderFieldsProps {
	fields: FieldList;
	namespace?: string;
}

export interface RenderSectionsProps {
	sections: SectionList;
}

export interface RenderFieldProps extends FieldProps<AnyObject> {}

export interface SectionProps<FormValues = AnyObject> {
	name: string;
	title?: string | React.ReactNode;
	icon?: React.ComponentType<{ className: string }>;
	fields: FieldList<FormValues>;
	/**
	 * If true, each field inside the section
	 * will be saved as `${section.name}.{field.name}`
	 */
	addSectionToFieldNames?: boolean;
}

type FieldList<FormValues = AnyObject> = Array<FieldProps<FormValues>>;
type SectionList<FormValues = AnyObject> = Array<SectionProps<FormValues>>;
