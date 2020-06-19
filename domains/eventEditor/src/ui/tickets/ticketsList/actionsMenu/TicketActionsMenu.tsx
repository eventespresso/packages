import React from 'react';

import { ActionsMenuComponentProps, EntityActionsMenu } from '@eventespresso/unknown'; // '@appLayout/entityActionsMenu';
import useTicketsActionMenuItems from '../../hooks/useTicketsActionMenuItems';
import { Ticket } from '@eventespresso/edtr-services';
import { getPropsAreEqual } from '@eventespresso/services';

const TicketActionsMenu: React.FC<ActionsMenuComponentProps<Ticket>> = ({ entity, ...props }) => {
	const menuItems = useTicketsActionMenuItems(entity);

	return <EntityActionsMenu {...props} menuItems={menuItems} />;
};

export default React.memo(TicketActionsMenu, getPropsAreEqual(['entity', 'cacheId']));
