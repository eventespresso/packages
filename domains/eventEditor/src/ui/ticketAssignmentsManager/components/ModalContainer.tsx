import React, { useMemo, useCallback } from 'react';
import { sprintf, __ } from '@eventespresso/i18n';

import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { useConfirmationDialog } from '@eventespresso/ui-components';

import TicketAssignmentsManagerModal from './TicketAssignmentsManagerModal';
import { withContext } from '../context';
import { useOnSubmitAssignments } from '../data';
import type { TAMModalProps } from '../context';
import type { BaseProps } from '../types';
import useInvalidDataAlert from './useInvalidDataAlert';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose, openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);

	const submitAssignments = useOnSubmitAssignments();

	const reOpenTamModal = useCallback(() => {
		openWithData({ assignmentType: 'forAll' });
	}, [openWithData]);

	const { confirmationDialog, onOpen: showAlert } = useConfirmationDialog({
		message: __(
			'There seem to be some dates/tickets which have no tickets/dates assigned. Do you want to fix them now?'
		),
		title: __('Alert!'),
		onConfirm: reOpenTamModal,
	});

	const checkForInvalidData = useInvalidDataAlert(showAlert);

	const { assignmentType, entity } = getData();

	let title = '';

	if (assignmentType === 'forDate') {
		title = sprintf(
			/* translators: 1 entity id, 2 entity name */
			__('Ticket Assignment Manager for Datetime: %1$s - %2$s'),
			String(entity.dbId),
			entity.name
		);
	} else if (assignmentType === 'forTicket') {
		title = sprintf(
			/* translators: 1 entity id, 2 entity name */
			__('Ticket Assignment Manager for Ticket: %1$s - %2$s'),
			String(entity.dbId),
			entity.name
		);
	}

	const contextProps = useMemo(() => ({ assignmentType, entity, title, onCloseModal: onClose }), [
		assignmentType,
		entity,
		onClose,
		title,
	]);

	const onSubmit = useCallback<TAMModalProps['onSubmit']>(
		async (data) => {
			// close the moal
			onClose();
			// submit TAM data
			await submitAssignments(data);
			checkForInvalidData();
		},
		[checkForInvalidData, onClose, submitAssignments]
	);

	if (!isOpen) {
		return <>{confirmationDialog}</>;
	}

	const Component = withContext(TicketAssignmentsManagerModal, contextProps);

	return (
		<>
			<Component title={title} onCloseModal={onClose} onSubmit={onSubmit} />
			{confirmationDialog}
		</>
	);
};

export default ModalContainer;
