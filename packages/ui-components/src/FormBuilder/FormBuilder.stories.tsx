import type { Story, Meta } from '@storybook/react/types-6-0';

import { uuid } from '@eventespresso/utils';

import type { FormBuilderProps, FormSection, FormElement } from './types';
import FormBuilder from './FormBuilder';
import { Heading } from '../';

export default {
	argTypes: {},
	component: FormBuilder,
	title: 'Components/FormBuilder',
} as Meta;

type FormBuilderStory = Story<FormBuilderProps>;

// Generate unique IDs for sections
const sectionIds = {
	personal_info: uuid(),
	address_info: uuid(),
	other_info: uuid(),
};

// this is based off of the data schema I started for the PHP models, but can be changed to whatever
const formSections: Array<FormSection> = [
	{
		UUID: sectionIds.personal_info,
		appliesTo: 'all',
		belongsTo: '',
		adminLabel: 'personal information',
		name: 'personal information',
		htmlClass: '',
		order: 1,
		relation: 'Event',
		status: 'active',
		wpUser: 1,
	},
	{
		UUID: sectionIds.address_info,
		appliesTo: 'all',
		belongsTo: 'Event-1',
		adminLabel: 'address information',
		name: 'address information',
		htmlClass: '',
		order: 2,
		relation: 'Event',
		status: 'active',
		wpUser: 1,
	},
	{
		UUID: sectionIds.other_info,
		appliesTo: 'all',
		belongsTo: 'Event-1',
		adminLabel: 'other information',
		name: 'other information',
		htmlClass: '',
		order: 3,
		relation: 'Event',
		status: 'active',
		wpUser: 1,
	},
];

const formElements: Array<FormElement> = [
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant first name',
		adminOnly: false,
		belongsTo: sectionIds.personal_info,
		helpClass: '',
		helpText: 'First name given to you when you were born 👼',
		htmlClass: '',
		order: 1,
		placeholder: 'Pee Wee',
		publicLabel: 'first name',
		required: true,
		requiredText: 'Please enter your first name!',
		status: 'active',
		type: 'text',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant last name',
		adminOnly: false,
		belongsTo: sectionIds.personal_info,
		helpClass: '',
		helpText: 'The name that you were "last" time called by 🗣',
		htmlClass: '',
		order: 2,
		placeholder: 'Herman',
		publicLabel: 'last name',
		required: false,
		requiredText: 'Please enter your last name!',
		status: 'active',
		type: 'text',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant email address',
		adminOnly: false,
		belongsTo: sectionIds.personal_info,
		helpClass: '',
		helpText: 'The address that you write at the end of each email 😬',
		htmlClass: '',
		order: 3,
		placeholder: 'peewee@playhouse.com',
		publicLabel: 'email address',
		required: true,
		requiredText: 'Please enter a valid email address!',
		status: 'active',
		type: 'email',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant age',
		adminOnly: false,
		belongsTo: sectionIds.personal_info,
		helpClass: '',
		helpText: 'Number of years since you were born. Please do the maths 📅',
		htmlClass: '',
		min: 10,
		order: 2,
		placeholder: '30',
		publicLabel: 'age',
		required: true,
		requiredText: 'Please enter your age!',
		status: 'active',
		type: 'integer',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'Where to live in 2021',
		adminOnly: false,
		belongsTo: 'earth',
		helpClass: '',
		helpText: 'Is it worth living where you want to?',
		htmlClass: '',
		order: 3,
		publicLabel: 'Where do you want to live',
		status: 'active',
		type: 'select',
		options: [
			{
				value: 'earth',
				label: 'Earth',
			},
			{
				value: 'mars',
				label: 'Mars',
			},
		],
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant street',
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpClass: '',
		helpText: 'Must have delicious street food 😋',
		htmlClass: '',
		order: 1,
		placeholder: '123 Ona Road',
		publicLabel: 'street address',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'text',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant city',
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpClass: '',
		helpText: 'The city you never live in',
		htmlClass: '',
		order: 2,
		placeholder: 'Some City',
		publicLabel: 'city',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'text',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant state',
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpClass: '',
		helpText: 'Solid, liquid or gas',
		htmlClass: '',
		order: 3,
		publicLabel: 'state/province',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'select-state',
		wpUser: 1,
		options: [
			{
				value: 'AB',
				label: 'Alberta',
			},
			{
				value: 'BC',
				label: 'British Columbia',
			},
		],
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant country',
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpClass: '',
		helpText: 'Thy country of origin',
		htmlClass: '',
		order: 4,
		publicLabel: 'country',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'select-country',
		wpUser: 1,
		options: [
			{
				value: 'CA',
				label: 'Canada',
			},
			{
				value: 'US',
				label: 'United States',
			},
		],
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'registrant postal code',
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpClass: '',
		helpText: "You won't receive any parcel 📦",
		htmlClass: '',
		order: 5,
		publicLabel: 'zip/postal code',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'text',
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'what can the user code?',
		adminOnly: false,
		belongsTo: sectionIds.other_info,
		helpClass: '',
		helpText: 'Spaces or tabs?',
		htmlClass: '',
		order: 5,
		publicLabel: 'what can you code?',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'checkbox-multi',
		options: [
			{
				value: 'js',
				label: 'JS',
			},
			{
				value: 'ts',
				label: 'TS',
			},
			{
				value: 'react',
				label: 'React',
			},
			{
				value: 'php',
				label: 'PHP',
			},
		],
		wpUser: 1,
	},
	{
		UUID: uuid(),
		relation: '',
		adminLabel: 'Which language does the user like the most?',
		adminOnly: false,
		belongsTo: sectionIds.other_info,
		helpClass: '',
		helpText: 'What about Kashmiri?',
		htmlClass: '',
		order: 5,
		publicLabel: 'Which language do you like the most?',
		required: false,
		requiredText: '',
		status: 'active',
		type: 'radio',
		options: [
			{
				value: 'js',
				label: 'JS',
			},
			{
				value: 'ts',
				label: 'TS',
			},
			{
				value: 'react',
				label: 'React',
			},
			{
				value: 'php',
				label: 'PHP',
			},
		],
		wpUser: 1,
	},
];

const Template: FormBuilderStory = (args) => (
	<FormBuilder
		{...args}
		containerClassName='ee-edtr-section'
		initialSections={formSections}
		initialElements={formElements}
		header={
			<Heading as='h3' className='ee-edtr-section-heading'>
				{'Registration Form Builder'}
			</Heading>
		}
	/>
);

export const Default: FormBuilderStory = Template.bind({});
