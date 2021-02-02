import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Copy, Edit, DropdownMenu, DropdownToggleProps } from '@eventespresso/ui-components';
import { EdtrGlobalModals, useTicketItem } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { useCopyTicket } from '@eventespresso/tpc';

import type { TicketMainMenuProps } from './types';
import { EntityEditModalData } from '@edtrUI/types';
import { DeleteTicket } from './DeleteTicket';

const toggleProps: DropdownToggleProps = { tooltip: __('ticket main menu') };

const TicketMainMenu: React.FC<TicketMainMenuProps> = (props) => {
	const ticketId = props.ticket.id;
	// Make sure to subscribe to Apollo cache
	// to avoid stale data
	const ticket = useTicketItem({ id: ticketId });

	const copyTicket = useCopyTicket(ticket);

	const { openWithData } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);

	const onOpenEditModal = useCallback(() => {
		openWithData({ entityId: ticketId });
	}, [ticketId, openWithData]);

	return (
		<DropdownMenu toggleProps={toggleProps}>
			<Edit onClick={onOpenEditModal} title={__('edit ticket')} />
			<Copy onClick={copyTicket} title={__('copy ticket')} />
			<DeleteTicket ticket={ticket} />
		</DropdownMenu>
	);
};

export default TicketMainMenu;
