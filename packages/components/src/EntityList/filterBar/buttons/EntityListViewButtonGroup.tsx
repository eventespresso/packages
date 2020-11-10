import React from 'react';

import { ButtonGroup } from '../../../Button';
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
		<ButtonGroup size='smaller'>
			<CardViewFilterButton listId={listId} setCardView={setCardView} view={view} />
			<TableViewFilterButton listId={listId} setTableView={setTableView} view={view} />
		</ButtonGroup>
	);
};

export default EntityListViewButtonGroup;
