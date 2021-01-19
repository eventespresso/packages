import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import {
	Copy,
	Edit,
	Trash,
	DropdownMenu,
	DropdownToggleProps,
	useConfirmationDialog,
} from '@eventespresso/ui-components';
import { EdtrGlobalModals, useTicketsListFilterState } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import type { TicketMainMenuProps } from './types';
import useActions from './useActions';
import { EntityEditModalData } from '@edtrUI/types';

const toggleProps: DropdownToggleProps = { tooltip: __('ticket main menu') };

const TicketMainMenu: React.FC<TicketMainMenuProps> = ({ ticket }) => {
	const { copyTicket, trashTicket, isTrashed } = useActions(ticket.id);
	const { openWithData } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);

	const isTheOnlyTicket = useTicketsListFilterState().total === 1;

	const title = isTrashed ? __('Permanently delete Ticket?') : __('Move Ticket to Trash?');
	const message = isTrashed
		? __('Are you sure you want to permanently delete this ticket? This action is permanent and can not be undone.')
		: __(
				'Are you sure you want to move this ticket to the trash? You can "untrash" this ticket later if you need to.'
		  );

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message,
		title,
		onConfirm: trashTicket,
	});

	const trashTicketTitle = isTrashed ? __('delete permanently') : __('trash ticket');

	const onOpenEditModal = useCallback(() => {
		openWithData({ entityId: ticket.id });
	}, [ticket.id, openWithData]);

	const cannotBeDeleted = isTrashed && isTheOnlyTicket;

	return (
		<>
			<DropdownMenu toggleProps={toggleProps}>
				<Edit onClick={onOpenEditModal} title={__('edit ticket')} />
				<Copy onClick={copyTicket} title={__('copy ticket')} />
				<Trash onClick={onOpen} title={trashTicketTitle} isDisabled={cannotBeDeleted} />
			</DropdownMenu>
			{confirmationDialog}
		</>
	);
};

export default TicketMainMenu;
