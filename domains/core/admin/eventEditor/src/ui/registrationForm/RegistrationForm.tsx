import { __ } from '@eventespresso/i18n';
import { withFeature } from '@eventespresso/services';
import { Heading } from '@eventespresso/ui-components';
import { FormBuilder } from '@eventespresso/form-builder';

// TODO replace mock data imported from component with real data from db
import { formSectionsData, formElementsData } from '../../../../../../../packages/form-builder/src/mockData';

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
