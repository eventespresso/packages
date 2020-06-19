import React from 'react';
import classNames from 'classnames';

import { Cell } from '@eventespresso/components';
import HeaderCell from './HeaderCell';
import type { Ticket } from '@eventespresso/edtr-services';
import useColClassName from './useColClassName';

const useGetHeaderRows = (tickets: Ticket[]) => {
	const getColClass = useColClassName();

	const emptyCell: Cell = {
		key: 'empty',
		type: 'cell',
		className: 'ee-rspnsv-table-column-huge',
		value: '',
	};

	const cells: Array<Cell> = tickets.map((ticket) => ({
		key: ticket.id,
		type: 'cell',
		className: classNames('ee-rspnsv-table-column-huge', getColClass(ticket)),
		value: <HeaderCell ticket={ticket} />,
	}));

	return [
		{
			cells: [emptyCell, ...cells],
			rowClassName: 'ticket-assignment-manager-table-header-row',
			key: 'ticket-assignment-manager-table-header-row',
			primary: true,
			type: 'row',
		},
	];
};

export default useGetHeaderRows;
