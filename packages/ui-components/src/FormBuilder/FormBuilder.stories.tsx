import type { Story, Meta } from '@storybook/react/types-6-0';

import type { FormBuilderProps, FormSection, FormElement } from './types';
import FormBuilder from './FormBuilder';
import { Heading } from '../';

export default {
	argTypes: {},
	component: FormBuilder,
	title: 'Components/FormBuilder',
} as Meta;

type FormBuilderStory = Story<FormBuilderProps>;

const formElements: Array<FormElement> = [
	{
		UUID: 'xyz123',
		relation: '',
		adminLabel: 'registrant first name',
		adminOnly: false,
		belongsTo: 'abc123',
		helpClass: '',
		helpText: '',
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
		UUID: 'xyz456',
		relation: '',
		adminLabel: 'registrant last name',
		adminOnly: false,
		belongsTo: 'abc123',
		helpClass: '',
		helpText: '',
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
		UUID: 'xyz852',
		relation: '',
		adminLabel: 'registrant age',
		adminOnly: false,
		belongsTo: 'abc123',
		helpClass: '',
		helpText: '',
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
		UUID: 'xyz789',
		relation: '',
		adminLabel: 'registrant email address',
		adminOnly: false,
		belongsTo: 'abc123',
		helpClass: '',
		helpText: '',
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
		UUID: 'pqr',
		relation: '',
		adminLabel: 'Where to live in 2021',
		adminOnly: false,
		belongsTo: 'earth',
		helpClass: '',
		helpText: '',
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
];
const formSections: Array<FormSection> = [
	{
		UUID: 'abc123',
		appliesTo: 'all',
		belongsTo: 'Event-1',
		adminLabel: 'personal questions',
		name: 'personal questions',
		htmlClass: '',
		order: 1,
		relation: 'Event',
		status: 'active',
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
