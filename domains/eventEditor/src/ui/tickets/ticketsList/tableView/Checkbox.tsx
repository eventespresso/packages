import React from 'react';

import { ActionCheckbox, ActionCheckboxProps } from '@eventespresso/components';
import { useEdtrState } from '@eventespresso/edtr-services';
import { checkFeatureFlag } from '@eventespresso/config';

const isBulkEditEnabled = checkFeatureFlag('bulkEdit');

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleTicketIds } = useEdtrState();
	if (!isBulkEditEnabled) {
		return null;
	}

	return <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} />;
};

export default Checkbox;
