import React, { useMemo, useCallback } from 'react';
import { sprintf, __ } from '@eventespresso/i18n';

import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import TicketAssignmentsManagerModal from './TicketAssignmentsManagerModal';
import type { BaseProps } from '../types';
import { withContext, TAMModalProps } from '../context';
import { useOnSubmitAssignments } from '../data';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);
	const submitAssignments = useOnSubmitAssignments();

	const { assignmentType, entity } = getData();

	let title = '';
	if (assignmentType === 'forDate') {
		title = sprintf(__('Ticket Assignment Manager for Datetime: %s - %s'), `${entity.dbId}`, entity.name);
	} else if (assignmentType === 'forTicket') {
		title = sprintf(__('Ticket Assignment Manager for Ticket: %s - %s'), `${entity.dbId}`, entity.name);
	}
	const contextProps = useMemo(() => ({ assignmentType, entity, title, onCloseModal: onClose }), [
		assignmentType,
		entity,
		onClose,
		title,
	]);
	const onSubmit = useCallback<TAMModalProps['onSubmit']>(
		(data) => {
			// close the moal
			onClose();
			// submit TAM data
			submitAssignments(data);
		},
		[onClose, submitAssignments]
	);
	if (!isOpen) {
		return null;
	}
	const Component = withContext(TicketAssignmentsManagerModal, contextProps);
	return <Component title={title} onCloseModal={onClose} onSubmit={onSubmit} />;
};

export default ModalContainer;
