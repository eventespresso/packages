import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import type { EntityId } from '@eventespresso/data';
import { useTicketsListFilterState } from '@eventespresso/edtr-services';
import { Trash, useConfirmationDialog } from '@eventespresso/ui-components';

import useDeleteTicketHandler from '@edtrUI/tickets/hooks/useDeleteTicketHandler';

export interface DeleteTicketProps {
	isTrashed?: boolean;
	onWarn?: VoidFunction;
	ticketId: EntityId;
}

export const DeleteTicket: React.FC<DeleteTicketProps> = ({ isTrashed, onWarn, ticketId }) => {
	const title = isTrashed ? __('Permanently delete Ticket?') : __('Move Ticket to Trash?');

	const message = isTrashed
		? __('Are you sure you want to permanently delete this ticket? This action is permanent and can not be undone.')
		: __(
				'Are you sure you want to move this ticket to the trash? You can "untrash" this ticket later if you need to.'
		  );

	const deleteTicket = useDeleteTicketHandler(ticketId);

	const onConfirmDelete = useCallback(() => {
		deleteTicket(isTrashed);
	}, [deleteTicket, isTrashed]);

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message,
		title,
		onConfirm: onConfirmDelete,
	});
	const isTheOnlyTicket = useTicketsListFilterState().total === 1;

	const cannotBeDeleted = isTrashed && isTheOnlyTicket;

	const deleteTicketTitle = isTrashed ? __('delete permanently') : __('trash ticket');

	const onDelete = (isTrashed && onWarn) || onOpen;

	return (
		<>
			<Trash onClick={onDelete} title={deleteTicketTitle} isDisabled={cannotBeDeleted} />
			{confirmationDialog}
		</>
	);
};
