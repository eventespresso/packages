import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Copy, Edit, Trash, DropdownMenu, DropdownToggleProps, useConfirmationDialog } from '@eventespresso/components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { useMemoStringify } from '@eventespresso/hooks';

import type { TicketMainMenuProps } from './types';
import useActions from './useActions';
import { EntityEditModalData } from '@edtrUI/types';

const TicketMainMenu: React.FC<TicketMainMenuProps> = ({ ticket }) => {
	const { copyTicket, trashTicket, trashed } = useActions({ ticketId: ticket.id });
	const { openWithData } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);

	const title = trashed ? __('Permanently delete Ticket?') : __('Move Ticket to Trash?');
	const message = trashed
		? __('Are you sure you want to permanently delete this ticket? This action is permanent and can not be undone.')
		: __(
				'Are you sure you want to move this ticket to the trash? You can "untrash" this ticket later if you need to.'
		  );

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message,
		title,
		onConfirm: trashTicket,
	});

	const toggleProps: DropdownToggleProps = useMemoStringify({
		tooltip: __('ticket main menu'),
		tooltipProps: { placement: 'left' },
	});

	const trashTicketTitle = trashed ? __('delete permanently') : __('trash ticket');

	const onOpenEditModal = useCallback(() => {
		openWithData({ entityId: ticket.id });
	}, [ticket.id, openWithData]);

	return (
		<>
			<DropdownMenu toggleProps={toggleProps}>
				<Edit onClick={onOpenEditModal} title={__('edit ticket')} />
				<Copy onClick={copyTicket} title={__('copy ticket')} />
				<Trash onClick={onOpen} title={trashTicketTitle} />
			</DropdownMenu>
			{confirmationDialog}
		</>
	);
};

export default TicketMainMenu;
