import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { CollapsibleLegend, ModalWithAlert, ModalWithAlertProps } from '@eventespresso/ui-components';
import { legendConfig } from './config';
import TicketAssignmentsManager from './TicketAssignmentsManager';
import { useDataState } from '../data';
import type { TAMModalProps } from '../context/types';

import '../styles.scss';

const TicketAssignmentsManagerModal: React.FC<Partial<TAMModalProps>> = ({ onCloseModal, onSubmit, title }) => {
	const { hasOrphanEntities, isDirty, getData } = useDataState();
	const hasErrors = hasOrphanEntities();

	const onSubmitHandler: ModalWithAlertProps['onSubmit'] = useCallback(() => {
		onSubmit(getData());
	}, [getData, onSubmit]);

	return (
		<ModalWithAlert
			bodyClassName='ee-ticket-assignments-manager__body'
			className='ee-ticket-assignments-manager'
			isOpen={true}
			isSubmitDisabled={hasErrors}
			onClose={onCloseModal}
			onCancel={onCloseModal}
			onSubmit={onSubmitHandler}
			showAlertOnClose={isDirty || hasErrors}
			title={title || __('Ticket Assignment Manager')}
		>
			<TicketAssignmentsManager />
			<CollapsibleLegend direction='row' legendConfig={legendConfig} />
		</ModalWithAlert>
	);
};

export default TicketAssignmentsManagerModal;
