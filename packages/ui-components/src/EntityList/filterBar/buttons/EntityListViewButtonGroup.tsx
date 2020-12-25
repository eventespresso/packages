import React from 'react';

import { ButtonGroup } from '../../../Button';
import { CardViewFilterButton } from './CardViewFilterButton';
import { TableViewFilterButton } from './TableViewFilterButton';
import type { EntityListViewButtonGroupProps } from '../types';

export const EntityListViewButtonGroup: React.FC<EntityListViewButtonGroupProps> = ({
	id,
	setCardView,
	setTableView,
	view,
}) => {
	return (
		<ButtonGroup size='smaller'>
			<CardViewFilterButton id={id} onClick={setCardView} view={view} />
			<TableViewFilterButton id={id} onClick={setTableView} view={view} />
		</ButtonGroup>
	);
};
