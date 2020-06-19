import React from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { useEntityActionsMenuItems } from '@edtrHooks/index';

const useDatesActionMenuItems = (datetime: Datetime): Array<React.ReactNode> => {
	return useEntityActionsMenuItems('datetime', datetime);
};

export default useDatesActionMenuItems;
