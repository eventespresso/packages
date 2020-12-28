import { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

import Modal from './Modal';
import { useFormState, useGenerateDates, useSubmitForm } from '../../data';
import { withContext, useStepsState } from '../../context';
import { RemGlobalModals } from '../../types';
import { ContentBody, ContentFooter } from '../MultiStep';

const Container: React.FC = () => {
	const { isOpen, close } = useGlobalModal(RemGlobalModals.MAIN);
	const { close: closeModal } = useGlobalModal(EdtrGlobalModals.NEW_DATE);

	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();
	const { getData, reset: resetFormState } = useFormState();
	const { reset: resetStepState } = useStepsState();
	const submitForm = useSubmitForm(getData(), generateDates);

	const resetState = useCallback(() => {
		// reset REM state
		resetFormState();
		// reset steps
		resetStepState();
	}, [resetFormState, resetStepState]);

	const onSubmit = useCallback(async () => {
		// close REM modal
		close();
		// close new date modal
		closeModal();
		// submit the data for mutations
		await submitForm();
		resetState();
	}, [close, closeModal, resetState, submitForm]);

	const onClose = useCallback(() => {
		// close REM modal
		close();
		resetState();
	}, [close, resetState]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ContentBody />
			<ContentFooter onSubmit={onSubmit} onClose={onClose} />
		</Modal>
	);
};

export default withContext(Container);
