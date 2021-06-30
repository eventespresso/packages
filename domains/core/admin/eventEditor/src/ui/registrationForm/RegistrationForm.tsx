import { __ } from '@eventespresso/i18n';
import { withFeature } from '@eventespresso/services';
import { Heading } from '@eventespresso/ui-components';
import { FormBuilder } from '@eventespresso/form-builder';
import { getEdtrDomData } from '@eventespresso/edtr-services';

const header = (
	<Heading as='h3' className='ee-edtr-section-heading'>
		{__('Registration Form')}
	</Heading>
);

export const RegistrationForm: React.FC = () => {
	const { elements, sections, topLevelSectionId } = getEdtrDomData('formBuilder');
	return (
		<FormBuilder
			containerClassName='ee-edtr-section'
			header={header}
			initialElements={elements}
			initialSections={sections}
			topLevelSectionId={topLevelSectionId}
			onChange={console.log}
		/>
	);
};

export default withFeature('use_reg_form_builder')(RegistrationForm);
