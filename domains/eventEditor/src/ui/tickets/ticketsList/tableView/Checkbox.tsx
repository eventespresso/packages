import React from 'react';

import { ActionCheckbox, ActionCheckboxProps } from '@eventespresso/components';
import { useEdtrState } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleTicketIds } = useEdtrState();

	return <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} />;
};

export default withFeature('use_bulk_edit')(Checkbox);
