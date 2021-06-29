import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';
import { withFeature } from '@eventespresso/services';
import { Heading } from '@eventespresso/ui-components';
import { FormBuilder } from '@eventespresso/form-builder';

// TODO replace mock data imported from component with real data from db
import { formSectionsData, formElementsData } from '../../../../../../../packages/form-builder/src/mockData';
import { hideAllExcept } from '../utils';

const header = (
	<Heading as='h3' className='ee-edtr-section-heading'>
		{__('Registration Form')}
	</Heading>
);

export const RegistrationForm: React.FC = () => {
	useEffect(() => hideAllExcept([]), []);
	return (
		<FormBuilder
			containerClassName='ee-edtr-section'
			header={header}
			initialElements={formElementsData}
			initialSections={formSectionsData}
			onChange={console.log}
		/>
	);
};

export default withFeature('use_reg_form_builder')(RegistrationForm);
