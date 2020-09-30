import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Cell, HeaderRow } from '@eventespresso/components';
import HeaderCell from './HeaderCell';
import type { Ticket } from '@eventespresso/edtr-services';
import useColClassName from './useColClassName';

const emptyCell: Cell = {
	key: 'empty',
	type: 'cell',
	className: 'ee-rspnsv-table-column-huge',
	value: '',
};

const useGetHeaderRows = (tickets: Ticket[]): HeaderRow[] => {
	const getColClass = useColClassName();

	return useMemo<HeaderRow[]>(() => {
		const cells: Array<Cell> = tickets.map((ticket) => ({
			key: ticket.id,
			type: 'cell',
			className: classNames('ee-rspnsv-table-column-huge', getColClass(ticket)),
			value: <HeaderCell ticket={ticket} />,
		}));

		return [
			{
				cells: [emptyCell, ...cells],
				key: 'ticket-assignment-manager-table-header-row',
				primary: true,
				type: 'row',
			},
		];
	}, [getColClass, tickets]);
};

export default useGetHeaderRows;
