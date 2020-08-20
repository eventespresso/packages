import React from 'react';

import { ActionCheckbox, ActionCheckboxProps } from '@eventespresso/components';
import { useEdtrState } from '@eventespresso/edtr-services';
import { checkFeatureFlag } from '@eventespresso/config';

const isBulkEditEnabled = checkFeatureFlag('bulkEdit');

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleDatetimeIds } = useEdtrState();
	if (!isBulkEditEnabled) {
		return null;
	}

	return <ActionCheckbox {...props} visibleEntityIds={visibleDatetimeIds} />;
};

export default Checkbox;
