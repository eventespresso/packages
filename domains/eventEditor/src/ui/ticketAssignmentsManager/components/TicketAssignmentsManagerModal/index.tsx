import { __ } from '@eventespresso/i18n';

import { CollapsibleLegend, ModalWithAlert } from '@eventespresso/ui-components';
import { legendConfig } from './config';
import TicketAssignmentsManager from '../TicketAssignmentsManager';
import useCancelButtonProps from './buttons/useCancelButtonProps';
import useSubmitButtonProps from './buttons/useSubmitButtonProps';
import { useDataState } from '../../data';
import type { TAMModalProps } from '../../context/types';

import '../styles.scss';

const TicketAssignmentsManagerModal: React.FC<Partial<TAMModalProps>> = ({ onCloseModal, onSubmit, title }) => {
	const { hasOrphanEntities, initialDataIsValid, isDirty } = useDataState();
	const cancelButtonProps = useCancelButtonProps(onCloseModal, !initialDataIsValid);
	const submitButtonProps = useSubmitButtonProps(onSubmit);
	const hasErrors = hasOrphanEntities();

	return (
		<ModalWithAlert
			bodyClassName='ee-ticket-assignments-manager__body'
			cancelButtonProps={cancelButtonProps}
			className='ee-ticket-assignments-manager'
			isOpen={true}
			onClose={onCloseModal}
			onCancel={onCloseModal}
			showAlertOnClose={isDirty || hasErrors}
			submitButtonProps={submitButtonProps}
			title={title || __('Ticket Assignment Manager')}
		>
			<TicketAssignmentsManager />
			<CollapsibleLegend direction='row' legendConfig={legendConfig} />
		</ModalWithAlert>
	);
};

export default TicketAssignmentsManagerModal;
