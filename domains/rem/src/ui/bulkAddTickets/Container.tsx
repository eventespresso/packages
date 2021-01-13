import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { useGlobalModal } from '@eventespresso/registry';
import { useTickets } from '@eventespresso/edtr-services';
import { TicketTemplates } from '@eventespresso/ee-components';

import { Modal } from '../Modal';
import { useFormState } from '../../data';
import { withContext } from '../../context';
import { RemGlobalModals } from '../../types';
import Footer from './Footer';
import useSubmitForm from './useSubmitForm';

const DEFAULT_DATETIME_IDS = [];

const Container: React.FC = () => {
	const defaultTickets = useTickets();

	const { getData, isOpen, close, setData } = useGlobalModal(RemGlobalModals.BULK_ADD_TICKETS);

	const { addTicket, reset: resetFormState, tickets } = useFormState();
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
			<TicketTemplates addTicket={addTicket} defaultTickets={defaultTickets} ticketTemplates={tickets} />
			<Footer onSubmit={onSubmit} onClose={onClose} />
		</Modal>
	);
};

export default withContext(Container);
