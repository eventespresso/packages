import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';
import type { UseDisclosureReturn } from '@chakra-ui/hooks';

import { Button, ButtonType } from '@eventespresso/components';
import { useGenerateDates } from '../generatedDates';
import { useSubmitForm, useFormState } from '../../data';

const SubmitButton: React.FC<Partial<UseDisclosureReturn>> = ({ onClose }) => {
	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();
	const { getData } = useFormState();
	const submitForm = useSubmitForm(getData(), generateDates);

	const onClick = useCallback(() => {
		onClose();
		submitForm();
	}, [onClose, submitForm]);

	return (
		<Button
			buttonText={__('Submit')}
			buttonType={ButtonType.PRIMARY}
			isDisabled={!generateDates.length}
			type='submit'
			onClick={onClick}
		/>
	);
};

export default SubmitButton;
