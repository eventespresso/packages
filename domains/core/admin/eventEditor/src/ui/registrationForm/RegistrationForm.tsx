import { __ } from '@eventespresso/i18n';
import { Heading } from '@eventespresso/ui-components';
import { FormBuilder, FormBuilderProps } from '@eventespresso/ee-components';
import { withFeature } from '@eventespresso/services';

// this is based off of the data schema I started for the PHP models, but can be changed to whatever
const formSections: FormBuilderProps['formSections'] = [
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
		elements: [
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
		],
	},
];

export const RegistrationForm: React.FC = () => (
	<FormBuilder
		containerClassName='ee-edtr-section'
		formSections={formSections}
		header={
			<Heading as='h3' className='ee-edtr-section-heading'>
				{__('Registration Form Builder')}
			</Heading>
		}
	/>
);

export default withFeature('use_reg_form_builder')(RegistrationForm);
