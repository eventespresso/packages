import React from 'react';

import { ActionCheckbox } from '@eventespresso/components';
import { useEdtrState } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import type { ActionCheckboxProps } from '@eventespresso/components';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleTicketIds } = useEdtrState();

	return <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} />;
};

export default withFeature('use_bulk_edit')(Checkbox);
