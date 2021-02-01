import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import {
	Copy,
	Edit,
	Untrash,
	DropdownMenu,
	DropdownToggleProps,
	useConfirmationDialog,
} from '@eventespresso/ui-components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { SOLD_TICKET_ERROR_MESSAGE } from '@eventespresso/tpc';

import type { TicketMainMenuProps } from './types';
import useActions from './useActions';
import { EntityEditModalData } from '@edtrUI/types';
import { DeleteTicket } from './DeleteTicket';

const toggleProps: DropdownToggleProps = { tooltip: __('ticket main menu') };

const TicketMainMenu: React.FC<TicketMainMenuProps> = ({ ticket }) => {
	const { copyTicket, hasRegistrations, isTrashed, untrashTicket } = useActions(ticket.id);
	const { openWithData } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);

	const onOpenEditModal = useCallback(() => {
		openWithData({ entityId: ticket.id });
	}, [ticket.id, openWithData]);

	const title = __('Alert!');

	const { confirmationDialog, onOpen: openConfirmation } = useConfirmationDialog({
		message: SOLD_TICKET_ERROR_MESSAGE,
		title,
		onConfirm: copyTicket,
		noButtonText: __('Cancel'),
		yesButtonText: __('copy ticket'),
	});

	const onEdit = hasRegistrations ? openConfirmation : onOpenEditModal;

	return (
		<>
			<DropdownMenu toggleProps={toggleProps}>
				<Edit onClick={onEdit} title={__('edit ticket')} />
				<Copy onClick={copyTicket} title={__('copy ticket')} />
				<DeleteTicket
					isTrashed={isTrashed}
					onWarn={hasRegistrations && openConfirmation}
					ticketId={ticket.id}
				/>
				{isTrashed && <Untrash onClick={untrashTicket} title={__('restore')} />}
			</DropdownMenu>
			{confirmationDialog}
		</>
	);
};

export default TicketMainMenu;
