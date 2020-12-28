import { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { __ } from '@eventespresso/i18n';

import { Modal } from '../Modal';
import { useFormState } from '../../data';
import { withContext } from '../../context';
import { RemGlobalModals } from '../../types';
import Footer from './Footer';
import useSubmitForm from './useSubmitForm';
import Tickets from '../Tickets';

const DEFAULT_DATETIME_IDS = [];

const Container: React.FC = () => {
	const { getData, isOpen, close, setData } = useGlobalModal(RemGlobalModals.BULK_ADD_TICKETS);

	const { reset: resetFormState, tickets } = useFormState();
	const submitForm = useSubmitForm(tickets, getData()?.entityIds || DEFAULT_DATETIME_IDS);

	const resetState = useCallback(() => {
		// reset REM state
		resetFormState();
	}, [resetFormState]);

	const resetData = useCallback(() => {
		resetState();
		// reset the global modal data
		setData({ entityIds: null });
	}, [resetState, setData]);

	const onSubmit = useCallback(async () => {
		// close modal
		close();
		// submit the data for mutations
		await submitForm();

		resetData();
	}, [close, resetData, submitForm]);

	const onClose = useCallback(() => {
		// close modal
		close();
		resetData();
	}, [close, resetData]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={__('Bulk Add Tickets')}>
			<Tickets />
			<Footer onSubmit={onSubmit} onClose={onClose} />
		</Modal>
	);
};

export default withContext(Container);
