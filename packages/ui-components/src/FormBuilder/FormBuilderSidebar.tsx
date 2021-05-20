import { __ } from '@eventespresso/i18n';
import { InfoCircleFilled } from '@eventespresso/icons';

import { Heading } from '../Heading';
import { Tooltip } from '../Tooltip';

const elementBlocks = [
	{
		label: 'Form Section',
		type: 'formSection',
		desc:
			'Used for creating logical groupings for questions and form elements. Need to add a heading or description? Use the HTML form element. ',
	},
	{
		label: 'HTML',
		type: 'html',
		desc: 'allows you to add HTML like headings or text paragraphs to your form',
	},
	{
		label: 'Text Input',
		type: 'text',
		desc: 'adds a text input that only accepts plain text',
	},
	{
		label: 'Plain Text Area',
		type: 'textarea',
		desc: 'adds a textarea block that only accepts plain text',
	},
	{
		label: 'HTML Text Area',
		type: 'textarea-html',
		desc: 'adds a textarea block that accepts text including simple HTML markup',
	},
	{
		label: 'Email Address',
		type: 'email',
		desc: 'adds a text input that only accets a valid email address',
	},
	{
		label: 'Email Confirmation',
		type: 'email-confirmation',
		desc:
			'adds a text input that confirms the entered email address matches the value entered into another email address input',
	},
	{
		label: 'Password',
		type: 'password',
		desc: 'adds a text input that accepts text but masks what the user enters',
	},
	{
		label: 'URL',
		type: 'url',
		desc: 'adds a text input for entering a URL address',
	},
	{
		label: 'Date',
		type: 'date',
		desc: 'adds a text input that allows users to enter a date directly via keyboard or a datepicker',
	},
	{
		label: 'Local Date',
		type: 'datetime-local',
		desc:
			'adds a text input that allows users to enter a date and time (no timezone) directly via keyboard or a date/time picker',
	},
	{
		label: 'Month',
		type: 'month',
		desc: 'adds a text input that allows users to enter a month and year directly via keyboard or a datepicker',
	},
	{
		label: 'Time',
		type: 'time',
		desc: 'adds a text input that allows users to enter a time directly via keyboard or a timepicker',
	},
	{
		label: 'Week',
		type: 'week',
		desc: 'adds a text input that allows users to enter a week and year directly via keyboard or a datepicker',
	},
	{
		label: 'Day Selector',
		type: 'day-select',
		desc: 'adds a dropdown selector that allows users to select the day of the month (01 to 31)',
	},
	{
		label: 'Month Selector',
		type: 'month-select',
		desc: 'adds a dropdown selector that allows users to select the month of the year (01 to 12)',
	},
	{
		label: 'Year Selector',
		type: 'year-select',
		desc: 'adds a dropdown selector that allows users to select the year from a configurable range',
	},
	{
		label: 'Checkbox',
		type: 'checkbox',
		desc: 'adds one or more checkboxes that allow users to select zero or more options from those provided',
	},
	{
		label: 'Radio Buttons',
		type: 'radio',
		desc: 'adds one or more radio buttons that allow users to only select one option from those provided',
	},
	{
		label: 'Decimal Number',
		type: 'decimal',
		desc: 'adds a text input that only accepts numbers whose value is a decimal (float)',
	},
	{
		label: 'Whole Number',
		type: 'integer',
		desc: 'adds a text input that only accepts numbers whose value is an integer (whole number)',
	},
	{
		label: 'Number Range',
		type: 'range',
		desc:
			'adds a slider input that can be used to indicate a number range for setting a minimum and maximum values',
	},
	{
		label: 'Phone Number',
		type: 'tel',
		desc:
			'adds a text field for entering a telephone number. Can be configured to only accept input that matches a pattern',
	},
	{
		label: 'Dropdown',
		type: 'select',
		desc: 'adds a dropdown selector that accepts a single value',
	},
	{
		label: 'Multi Select',
		type: 'select-multi',
		desc: 'adds a dropdown selector that accepts multiple values',
	},
	{
		label: 'Country Selector',
		type: 'select-country',
		desc: 'adds a dropdown selector populated with names of countries that are enabled for the site',
	},
	{
		label: 'State Selector',
		type: 'select-state',
		desc:
			'adds a dropdown selector populated with names of states/provinces for the countries that are enabled for the site',
	},
	{
		label: 'Button',
		type: 'button',
		desc: 'adds a button to the form that can be used for triggering fucntionality (requires custom coding)',
	},
	{
		label: 'Reset Button',
		type: 'reset',
		desc: "adds a button that will reset the form back to it's orginial state.",
	},
	// {
	// 	label: 'Submit Button',
	// 	type: 'submit',
	// 	desc: '',
	// },
];

export const FormBuilderSidebar = () => {
	const tags = elementBlocks.map((tag, index) => {
		const tooltip = tag?.desc && (
			<Tooltip placement='top' tooltip={tag?.desc}>
				<span>
					<InfoCircleFilled aria-label={tag?.desc} size='small' />
				</span>
			</Tooltip>
		);
		return (
			<div key={index} className='element-block'>
				<span>{tag.label}</span>
				{tooltip}
			</div>
		);
	});
	return (
		<>
			<Heading as='h5'>{__('Form Elements')}</Heading>
			<div className='form-element-blocks'>{tags}</div>
		</>
	);
};
