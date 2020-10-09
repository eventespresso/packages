import React from 'react';

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
		<ButtonGroup buttonSize={ButtonSize.SMALLER}>
			<CardViewFilterButton listId={listId} setCardView={setCardView} view={view} />
			<TableViewFilterButton listId={listId} setTableView={setTableView} view={view} />
		</ButtonGroup>
	);
};

export default EntityListViewButtonGroup;
