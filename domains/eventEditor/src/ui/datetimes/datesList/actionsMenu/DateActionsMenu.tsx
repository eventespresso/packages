import React from 'react';

import type { ActionsMenuComponentProps } from '@eventespresso/registry';
import { EntityActionsMenu } from '@eventespresso/components';
import useDatesActionMenuItems from '../../hooks/useDatesActionMenuItems';
import { Datetime } from '@eventespresso/edtr-services';
import { getPropsAreEqual } from '@eventespresso/utils';

const DateActionsMenu: React.FC<ActionsMenuComponentProps<Datetime>> = ({ entity, ...props }) => {
	const menuItems = useDatesActionMenuItems(entity);

	return <EntityActionsMenu {...props} menuItems={menuItems} />;
};

export default React.memo(DateActionsMenu, getPropsAreEqual(['entity', 'cacheId']));
