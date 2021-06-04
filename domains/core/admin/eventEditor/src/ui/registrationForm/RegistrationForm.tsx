import { __ } from '@eventespresso/i18n';
import { withFeature } from '@eventespresso/services';
import { FormBuilder, Heading, formSectionsData, formElementsData } from '@eventespresso/ui-components';

// TODO replace mock data imported from component with real data from db

export const RegistrationForm: React.FC = () => (
	<FormBuilder
		containerClassName='ee-edtr-section'
		initialSections={formSectionsData}
		initialElements={formElementsData}
		header={
			<Heading as='h3' className='ee-edtr-section-heading'>
				{__('Registration Form Builder')}
			</Heading>
		}
	/>
);

export default withFeature('use_reg_form_builder')(RegistrationForm);
