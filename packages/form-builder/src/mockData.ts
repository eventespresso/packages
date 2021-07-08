import { uuid } from '@eventespresso/utils';

import { stringifyElementFields, stringifySectionFields } from './state/utils';
import type { FormSection, FormElement } from './types';

// Generate unique IDs for sections
const sectionIds = {
	personal_info: uuid(),
	address_info: uuid(),
	other_info: uuid(),
};

const isNew = true;

// this is based off of the data schema I started for the PHP models, but can be changed to whatever
export const formSections: Array<Partial<FormSection>> = [
	{
		id: sectionIds.personal_info,
		appliesTo: 'ALL',
		belongsTo: '',
		label: {
			adminLabel: 'personal information',
			publicLabel: 'personal information',
		},
		order: 1,
		status: 'ACTIVE',
		isNew,
	},
	{
		id: sectionIds.address_info,
		appliesTo: 'ALL',
		belongsTo: sectionIds.personal_info,
		label: {
			adminLabel: 'address information',
			publicLabel: 'address information',
		},
		order: 2,
		status: 'ACTIVE',
		isNew,
	},
	{
		id: sectionIds.other_info,
		appliesTo: 'ALL',
		belongsTo: sectionIds.personal_info,
		label: {
			adminLabel: 'other information',
			publicLabel: 'other information',
		},
		order: 3,
		status: 'ACTIVE',
		isNew,
	},
];

export const formSectionsData = formSections.map(stringifySectionFields);

export const formElements: Array<Partial<FormElement>> = [
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: 'Pee Wee',
		},
		belongsTo: sectionIds.personal_info,
		helpText: {
			helpText: 'First name given to you when you were born 👼',
		},
		label: {
			adminLabel: 'registrant first name',
			publicLabel: 'first name',
		},
		order: 1,
		required: {
			required: true,
			validationText: 'Please enter your first name!',
		},
		type: 'TEXT',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: 'Herman',
		},
		belongsTo: sectionIds.personal_info,
		helpText: {
			helpText: 'The name that you were "last" time called by 🗣',
		},
		label: {
			adminLabel: 'registrant last name',
			publicLabel: 'last name',
		},
		order: 2,
		required: {
			required: false,
			validationText: 'Please enter your last name!',
		},
		type: 'TEXT',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: 'peewee@playhouse.com',
		},
		belongsTo: sectionIds.personal_info,
		helpText: {
			helpText: 'The address that you write at the end of each email 😬',
		},
		label: {
			adminLabel: 'registrant email address',
			publicLabel: 'email address',
		},
		order: 3,
		required: {
			required: true,
			validationText: 'Please enter a valid email address!',
		},
		type: 'EMAIL',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: '30',
			min: 10,
		},
		belongsTo: sectionIds.personal_info,
		helpText: {
			helpText: 'Number of years since you were born. Please do the maths 📅',
		},
		label: {
			adminLabel: 'registrant age',
			publicLabel: 'age',
		},
		order: 2,
		required: {
			required: true,
			validationText: 'Please enter your age!',
		},
		type: 'INTEGER',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: 'Is it worth living where you want to?',
		},
		label: {
			adminLabel: 'Where to live in 2021',
			publicLabel: 'Where do you want to live',
		},
		order: 3,
		type: 'SELECT',
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
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: '123 Ona Road',
		},
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: 'Must have delicious street food 😋',
		},
		label: {
			adminLabel: 'registrant street',
			publicLabel: 'street address',
		},
		order: 1,
		required: {
			required: false,
			validationText: '',
		},
		type: 'TEXT',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		attributes: {
			placeholder: 'Some City',
		},
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: 'The city you never live in',
		},
		label: {
			adminLabel: 'registrant city',
			publicLabel: 'city',
		},
		order: 2,
		required: {
			required: false,
			validationText: '',
		},
		type: 'TEXT',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: 'Solid, liquid or gas',
		},
		label: {
			adminLabel: 'registrant state',
			publicLabel: 'state/province',
		},
		order: 3,
		required: {
			required: false,
			validationText: '',
		},
		type: 'SELECT_STATE',
		isNew,

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
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: 'Thy country of origin',
		},
		label: {
			adminLabel: 'registrant country',
			publicLabel: 'country',
		},
		order: 4,
		required: {
			required: false,
			validationText: '',
		},
		type: 'SELECT_COUNTRY',
		isNew,

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
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.address_info,
		helpText: {
			helpText: "You won't receive any parcel 📦",
		},
		label: {
			adminLabel: 'registrant postal code',
			publicLabel: 'zip/postal code',
		},
		order: 5,
		required: {
			required: false,
			validationText: '',
		},
		type: 'TEXT',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.other_info,
		label: {
			html: `<p>This is an example HTML block. In this block, user can add any arbitary HTML. This is <strong>bold</strong> here, this <strong><em>bold and italic</em></strong>, this <strong><ins>bold and underlined</ins></strong>, this <em><ins>italic and underlined</ins></em>. There can also be list items like this:</p>
			<ul>
			<li>Test Item 1</li>
			<li>Test Item 2</li>
			</ul>
			`,
		},
		order: 1,
		required: {
			required: false,
			validationText: '',
		},
		type: 'HTML',
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.other_info,
		helpText: {
			helpText: 'Spaces or tabs?',
		},
		label: {
			adminLabel: 'what can the user code?',
			publicLabel: 'what can you code?',
		},
		order: 5,
		required: {
			required: false,
			validationText: '',
		},
		type: 'CHECKBOX_MULTI',
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
		isNew,
	},
	{
		id: uuid(),
		adminOnly: false,
		belongsTo: sectionIds.other_info,
		helpText: {
			helpText: 'What about Kashmiri?',
		},
		label: {
			adminLabel: 'Which language does the user like the most?',
			publicLabel: 'Which language do you like the most?',
		},
		order: 5,
		required: {
			required: false,
			validationText: '',
		},
		type: 'RADIO',
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
		isNew,
	},
];

export const formElementsData = formElements.map(stringifyElementFields);
