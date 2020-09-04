import React, { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

import Modal from './Modal';
import { useGenerateDates } from '../generatedDates';
import { useFormState, useSubmitForm } from '../../data';
import { withContext, useStepsState } from '../../context';
import { RemGlobalModals } from '../../types';

const Container: React.FC = () => {
	const { isOpen, close } = useGlobalModal(RemGlobalModals.MAIN);
	const { close: closePopover } = useGlobalModal(EdtrGlobalModals.NEW_DATE_POPOVER);

	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();
	const { getData, reset: resetFormState } = useFormState();
	const { reset: resetStepState } = useStepsState();
	const submitForm = useSubmitForm(getData(), generateDates);

	const onSubmit = useCallback(async () => {
		// close REM modal
		close();
		// close new date popover
		closePopover();
		// submit the data for mutations
		await submitForm();
		// reset REM state
		resetFormState();
		// reset steps
		resetStepState();
	}, [close, closePopover, resetFormState, resetStepState, submitForm]);

	const onClose = useCallback(() => {
		// close REM modal
		close();
		// reset REM state
		resetFormState();
		// reset steps
		resetStepState();
	}, [close, resetFormState, resetStepState]);

	return isOpen && <Modal isOpen={true} onClose={onClose} onSubmit={onSubmit} />;
};

export default withContext(Container);
