import { __ } from '@eventespresso/i18n';
import { FormBuilder, Heading } from '@eventespresso/ui-components';
import { withFeature } from '@eventespresso/services';

// this is based off of the data schema I started for the PHP models, but can be changed to whatever
const formSections = [
	{
		UUID: 'abc123',
		appliesTo: 'all',
		belongsTo: 'Event-1',
		adminLabel: 'personal questions',
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
				max: -1,
				min: null,
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
				max: -1,
				min: null,
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
				UUID: 'xyz789',
				relation: '',
				adminLabel: 'registrant email address',
				adminOnly: false,
				belongsTo: 'abc123',
				helpClass: '',
				helpText: '',
				htmlClass: '',
				max: -1,
				min: null,
				order: 3,
				placeholder: 'peewee@playhouse.com',
				publicLabel: 'email address',
				required: true,
				requiredText: 'Please enter a valid email address!',
				status: 'active',
				type: 'email',
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
