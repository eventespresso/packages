import * as R from 'ramda';

import { __ } from '@eventespresso/i18n';
import type { OptionsType } from '@eventespresso/adapters';

import { ElementBlock, FormSection, FormElement, ElementType } from './types';

export const SECTIONS_DROPPABLE_ID = 'form-sections';

export const DEFAULT_SECTION: FormSection = {
	UUID: '',
	appliesTo: 'all',
	name: '',
	order: 1,
	status: 'active',
};

export const DEFAULT_ELEMENT: FormElement = {
	UUID: '',
	belongsTo: '',
	type: 'text',
	order: 1,
	status: 'active',
};

// These are the fields that require `options` to be passed to the component
export const FIELDS_WITH_OPTIONS: Array<ElementType> = ['checkbox-multi', 'radio', 'select'];

export const ELEMENT_BLOCKS: Array<ElementBlock> = [
	{
		label: __('Form Section'),
		type: 'formSection',
		desc: __(
			'Used for creating logical groupings for questions and form elements. Need to add a heading or description? Use the HTML form element.'
		),
	},
	{
		label: __('HTML Block'),
		type: 'html',
		desc: __('allows you to add HTML like headings or text paragraphs to your form'),
	},
	{
		label: __('Text Input'),
		type: 'text',
		desc: __('adds a text input that only accepts plain text'),
	},
	{
		label: __('Plain Text Area'),
		type: 'textarea',
		desc: __('adds a textarea block that only accepts plain text'),
	},
	{
		label: __('HTML Text Area'),
		type: 'textarea-html',
		desc: __('adds a textarea block that accepts text including simple HTML markup'),
	},
	{
		label: __('Email Address'),
		type: 'email',
		desc: __('adds a text input that only accets a valid email address'),
	},
	{
		label: __('Email Confirmation'),
		type: 'email-confirmation',
		desc: 'adds a text input that confirms the entered email address matches the value entered into another email address input',
	},
	{
		label: __('Password'),
		type: 'password',
		desc: __('adds a text input that accepts text but masks what the user enters'),
	},
	{
		label: __('URL'),
		type: 'url',
		desc: __('adds a text input for entering a URL address'),
	},
	{
		label: __('Date'),
		type: 'date',
		desc: __('adds a text input that allows users to enter a date directly via keyboard or a datepicker'),
	},
	{
		label: __('Local Date'),
		type: 'datetime-local',
		desc: 'adds a text input that allows users to enter a date and time (no timezone) directly via keyboard or a date/time picker',
	},
	{
		label: __('Month'),
		type: 'month',
		desc: __('adds a text input that allows users to enter a month and year directly via keyboard or a datepicker'),
	},
	{
		label: __('Time'),
		type: 'time',
		desc: __('adds a text input that allows users to enter a time directly via keyboard or a timepicker'),
	},
	{
		label: __('Week'),
		type: 'week',
		desc: __('adds a text input that allows users to enter a week and year directly via keyboard or a datepicker'),
	},
	{
		label: __('Day Selector'),
		type: 'day-select',
		desc: __('adds a dropdown selector that allows users to select the day of the month (01 to 31)'),
	},
	{
		label: __('Month Selector'),
		type: 'month-select',
		desc: __('adds a dropdown selector that allows users to select the month of the year (01 to 12)'),
	},
	{
		label: __('Year Selector'),
		type: 'year-select',
		desc: __('adds a dropdown selector that allows users to select the year from a configurable range'),
	},
	{
		label: __('Radio Buttons'),
		type: 'radio',
		desc: __('adds one or more radio buttons that allow users to only select one option from those provided'),
	},
	{
		label: __('Decimal Number'),
		type: 'decimal',
		desc: __('adds a text input that only accepts numbers whose value is a decimal (float)'),
	},
	{
		label: __('Whole Number'),
		type: 'integer',
		desc: __('adds a text input that only accepts numbers whose value is an integer (whole number)'),
	},
	{
		label: __('Number Range'),
		type: 'range',
		desc: 'adds a slider input that can be used to indicate a number range for setting a minimum and maximum values',
	},
	{
		label: __('Phone Number'),
		type: 'tel',
		desc: 'adds a text field for entering a telephone number. Can be configured to only accept input that matches a pattern',
	},
	{
		label: __('Dropdown'),
		type: 'select',
		desc: __('adds a dropdown selector that accepts a single value'),
	},
	{
		label: __('Multi Select'),
		type: 'select-multi',
		desc: __('adds a dropdown selector that accepts multiple values'),
	},
	{
		label: __('Toggle/Switch'),
		type: 'switch',
		desc: __('adds a toggle or a switch to accept true or false value'),
	},
	{
		label: __('Multi Checkbox'),
		type: 'checkbox-multi',
		desc: __('adds checkboxes that allow users to select zero or more options from those provided'),
	},
	{
		label: __('Country Selector'),
		type: 'select-country',
		desc: __('adds a dropdown selector populated with names of countries that are enabled for the site'),
	},
	{
		label: __('State Selector'),
		type: 'select-state',
		desc: 'adds a dropdown selector populated with names of states/provinces for the countries that are enabled for the site',
	},
	{
		label: __('Button'),
		type: 'button',
		desc: __('adds a button to the form that can be used for triggering fucntionality (requires custom coding)'),
	},
	{
		label: __('Reset Button'),
		type: 'reset',
		desc: __('adds a button that will reset the form back to its orginial state.'),
	},
];

export const ELEMENT_BLOCKS_INDEXED = R.indexBy(R.prop('type'), ELEMENT_BLOCKS);

export const ELEMENT_BLOCKS_OPTIONS = ELEMENT_BLOCKS.map<OptionsType[number]>(({ label, type: value }) => ({
	label,
	value,
}));
