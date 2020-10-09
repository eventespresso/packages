import React from 'react';

import type { ActionsMenuComponentProps } from '@eventespresso/registry';
import { EntityActionsMenu } from '@eventespresso/components';
import useDatesActionMenuItems from '../../hooks/useDatesActionMenuItems';
import { Datetime } from '@eventespresso/edtr-services';

const DateActionsMenu: React.FC<ActionsMenuComponentProps<Datetime>> = ({ entity, ...props }) => {
	const menuItems = useDatesActionMenuItems(entity);

	return <EntityActionsMenu {...props} menuItems={menuItems} />;
};

export default DateActionsMenu;
