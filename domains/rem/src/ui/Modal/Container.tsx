import React, { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

import Modal from './Modal';
import { useGenerateDates } from '../generatedDates';
import { useFormState, useSubmitForm } from '../../data';
import { withContext } from '../../context';
import { RemGlobalModals } from '../../types';

const Container: React.FC = () => {
	const { isOpen, close } = useGlobalModal(RemGlobalModals.MAIN);
	const { close: closePopover } = useGlobalModal(EdtrGlobalModals.NEW_DATE_POPOVER);

	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();
	const { getData } = useFormState();
	const submitForm = useSubmitForm(getData(), generateDates);

	const onSubmit = useCallback(() => {
		close();
		closePopover();
		submitForm();
	}, [close, closePopover, submitForm]);

	return isOpen && <Modal isOpen={true} onClose={close} onSubmit={onSubmit} />;
};

export default withContext(Container);
