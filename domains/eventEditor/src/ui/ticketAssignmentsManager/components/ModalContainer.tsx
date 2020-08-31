import React, { useMemo } from 'react';
import { sprintf, __ } from '@wordpress/i18n';

import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import TicketAssignmentsManagerModal from './TicketAssignmentsManagerModal';
import type { BaseProps } from '../types';
import { withContext } from '../context';

const ModalContainer: React.FC = () => {
	const { getData, isOpen, close: onClose } = useGlobalModal<BaseProps>(EdtrGlobalModals.TAM);
	const props = getData();

	const { assignmentType, entity } = props;

	let title = '';
	if (assignmentType === 'forDate') {
		title = sprintf(__('Ticket Assignment Manager for Datetime: %s - %s'), `${entity.dbId}`, entity.name);
	} else if (assignmentType === 'forTicket') {
		title = sprintf(__('Ticket Assignment Manager for Ticket: %s - %s'), `${entity.dbId}`, entity.name);
	}
	const contextProps = useMemo(() => ({ ...props, title, onCloseModal: onClose }), [onClose, props, title]);
	if (!isOpen) {
		return null;
	}
	const Component = withContext(TicketAssignmentsManagerModal, contextProps);
	return <Component title={title} onCloseModal={onClose} />;
};

export default ModalContainer;
