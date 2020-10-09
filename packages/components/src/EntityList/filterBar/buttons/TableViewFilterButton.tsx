import React from 'react';

import { __ } from '@eventespresso/i18n';
import { TableView } from '@eventespresso/icons';

import { Button } from '../../../Button';
import type { TableViewFilterButtonProps } from '../types';

const TableViewFilterButton: React.FC<TableViewFilterButtonProps> = ({ listId, setTableView, view, ...rest }) => {
	const filterId = `ee-table-view-btn-${listId}`;

	return (
		<Button
			active={view === 'table'}
			className='ee-filter-bar__btn'
			icon={TableView}
			id={filterId}
			onClick={view !== 'table' ? setTableView : null}
			labelClassName={'ee-filter-bar__btn-wrap'}
			{...rest}
		>
			{__('table view')}
		</Button>
	);
};

export default TableViewFilterButton;
