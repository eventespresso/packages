import { useCallback } from 'react';

import { useGlobalModal } from '@eventespresso/registry';
import { __ } from '@eventespresso/i18n';
import { SimpleTicketsList } from '@eventespresso/ee-components';

import { Modal } from '../Modal';
import { useFormState } from '../../data';
import { withContext } from '../../context';
import { RemGlobalModals } from '../../types';
import Footer from './Footer';
import useSubmitForm from './useSubmitForm';

const DEFAULT_DATETIME_IDS = [];

const Container: React.FC = () => {
	const { getData, isOpen, close, setData } = useGlobalModal(RemGlobalModals.BULK_ADD_TICKETS);
	const formState = useFormState();
	const { reset: resetFormState, tickets } = formState;
	const submitForm = useSubmitForm(tickets, getData()?.entityIds || DEFAULT_DATETIME_IDS);

	const resetData = useCallback(() => {
		resetFormState();
		// reset the global modal data
		setData({ entityIds: null });
	}, [resetFormState, setData]);

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
			<SimpleTicketsList
				// @ts-ignore
				formState={formState}
			/>
			<Footer onSubmit={onSubmit} onClose={onClose} />
		</Modal>
	);
};

export default withContext(Container);
