import React from 'react';

import { getPropsAreEqual } from '@eventespresso/utils';
import { ButtonGroup, ButtonSize } from '../../../Button';
import CardViewFilterButton from './CardViewFilterButton';
import TableViewFilterButton from './TableViewFilterButton';
import type { EntityListViewButtonGroupProps } from '../types';

const EntityListViewButtonGroup: React.FC<EntityListViewButtonGroupProps> = ({
	listId,
	setCardView,
	setTableView,
	view,
}) => {
	return (
		<ButtonGroup buttonSize={ButtonSize.SMALL}>
			<CardViewFilterButton listId={listId} setCardView={setCardView} view={view} />
			<TableViewFilterButton listId={listId} setTableView={setTableView} view={view} />
		</ButtonGroup>
	);
};

export default React.memo(EntityListViewButtonGroup, getPropsAreEqual(['listId'], ['view']));
