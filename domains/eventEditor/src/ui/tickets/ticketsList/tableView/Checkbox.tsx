import React from 'react';

import { ActionCheckbox, ActionCheckboxProps } from '@eventespresso/components';

import { useEdtrState } from '@edtrHooks/edtrState';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const { visibleTicketIds } = useEdtrState();

	return <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} />;
};

export default Checkbox;
