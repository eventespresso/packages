import React from 'react';

import { EntityActionsMenu } from '@eventespresso/components';
import type { ActionsMenuComponentProps } from '@eventespresso/registry';
import type { Ticket } from '@eventespresso/edtr-services';

import useTicketsActionMenuItems from '../../hooks/useTicketsActionMenuItems';

const TicketActionsMenu: React.FC<ActionsMenuComponentProps<Ticket>> = ({ entity, ...props }) => {
	const menuItems = useTicketsActionMenuItems(entity);

	return <EntityActionsMenu {...props} menuItems={menuItems} />;
};

export default TicketActionsMenu;
