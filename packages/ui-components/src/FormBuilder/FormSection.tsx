import { Button } from '../Button';
import { FormElement } from './FormElement';

import type { FormSectionProps } from './types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection }) => {
	const formElements = formSection.elements.map((element, index) => <FormElement key={index} element={element} />);
	return (
		<fieldset className='ee-form-builder__form-section'>
			<legend>form section: {formSection.adminLabel}</legend>
			{formElements}
			<Button
				buttonText={`edit ${formSection.adminLabel} form section`}
				className='ee-form-builder__form-section-edit-btn'
				noVerticalMargin
				size='micro'
			/>
		</fieldset>
	);
};
