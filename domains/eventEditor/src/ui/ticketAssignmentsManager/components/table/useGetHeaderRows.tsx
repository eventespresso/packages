import { useMemo } from 'react';

import { CellData, HeaderRow } from '@eventespresso/ui-components';
import HeaderCell from './HeaderCell';
import type { Ticket } from '@eventespresso/edtr-services';
import useColClassName from './useColClassName';

const emptyCell: CellData = {
	key: 'empty',
	size: 'huge',
	value: '',
};

const useGetHeaderRows = (tickets: Ticket[]): HeaderRow[] => {
	const getColClass = useColClassName();

	return useMemo<HeaderRow[]>(() => {
		const cells: Array<CellData> = tickets.map((ticket) => ({
			className: getColClass(ticket),
			key: ticket.id,
			size: 'huge',
			value: <HeaderCell ticket={ticket} />,
		}));

		return [
			{
				cells: [emptyCell, ...cells],
				key: 'ee-ticket-assignments-manager-table-header-row',
				primary: true,
				type: 'row',
			},
		];
	}, [getColClass, tickets]);
};

export default useGetHeaderRows;
