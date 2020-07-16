import React from 'react';

import { useNewEntityOptionItems } from '@edtrHooks/index';

const useNewTicketOptionItems = (): Array<React.ReactNode> => {
	return useNewEntityOptionItems('ticket');
};

export default useNewTicketOptionItems;
