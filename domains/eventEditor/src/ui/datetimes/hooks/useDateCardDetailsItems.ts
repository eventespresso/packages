import React from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { useEntityCardDetailsItems } from '@edtrHooks/index';

const useDateCardDetailsItems = (datetime: Datetime): Array<React.ReactNode> => {
	return useEntityCardDetailsItems('datetime', datetime);
};

export default useDateCardDetailsItems;
