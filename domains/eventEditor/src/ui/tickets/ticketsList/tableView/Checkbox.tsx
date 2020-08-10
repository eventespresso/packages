import React from 'react';

import { ActionCheckbox, ActionCheckboxProps } from '@eventespresso/components';

import { useEdtrState } from '@eventespresso/edtr-services';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleTicketIds } = useEdtrState();

	return <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} />;
};

export default Checkbox;
