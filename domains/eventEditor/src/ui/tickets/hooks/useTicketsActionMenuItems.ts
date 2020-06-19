import React from 'react';

import { Ticket } from '@eventespresso/edtr-services';
import { useEntityActionsMenuItems } from '@edtrHooks/index';

const useTicketsActionMenuItems = (ticket: Ticket): Array<React.ReactNode> => {
	return useEntityActionsMenuItems('ticket', ticket);
};

export default useTicketsActionMenuItems;
