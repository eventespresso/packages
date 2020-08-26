import React, { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';

import Modal from './Modal';
import { useGenerateDates } from '../generatedDates';
import { useFormState, useSubmitForm } from '../../data';
import { withContext } from '../../context';

const Container: React.FC = () => {
	const { isOpen, close } = useGlobalModal('rem');

	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();
	const { getData } = useFormState();
	const submitForm = useSubmitForm(getData(), generateDates);

	const onSubmit = useCallback(() => {
		close();
		submitForm();
	}, [close, submitForm]);

	return isOpen ? <Modal isOpen={true} onClose={close} onSubmit={onSubmit} /> : null;
};

export default withContext(Container);
