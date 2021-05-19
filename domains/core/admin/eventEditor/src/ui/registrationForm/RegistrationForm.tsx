import { __ } from '@eventespresso/i18n';
import { FormBuilder, Heading } from '@eventespresso/ui-components';
import { withFeature } from '@eventespresso/services';

// this is based off of the data schema I started for the PHP models, but can be changed to whatever
const formSections = [
	{
		UUID: 'abc123',
		appliesTo: 'all',
		belongsTo: 'Event-1',
		elements: [
			{
				UUID: 'xyz789',
				relation: '',
				adminLabel: 'registrant first name',
				adminOnly: false,
				belongsTo: 'abc123',
				helpClass: '',
				helpText: '',
				htmlClass: '',
				max: -1,
				min: null,
				order: 0,
				placeholder: 'Pee Wee Herman',
				publicLabel: 'first name',
				required: true,
				requiredText: 'Please enter your first name!',
				status: 'active',
				type: 'text',
				wpUser: 1,
			},
		],
		htmlClass: '',
		order: 0,
		relation: 'Event',
		status: 'active',
		wpUser: 1,
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
