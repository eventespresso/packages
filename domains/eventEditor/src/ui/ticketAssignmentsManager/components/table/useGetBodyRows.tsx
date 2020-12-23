import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Cell, BodyRow } from '@eventespresso/components';
import BodyCell from './BodyCell';
import DateCell from './DateCell';

import { useDataState } from '../../data';
import type { DatesAndTickets, RelationClassName } from '../../types';
import useRowClassName from './useRowClassName';
import useColClassName from './useColClassName';

const useGetBodyRows = ({ datetimes, tickets }: DatesAndTickets): BodyRow[] => {
	const { getAssignmentStatus } = useDataState();

	const getRowClass = useRowClassName();
	const getColClass = useColClassName();

	return useMemo(() => {
		return datetimes.map((datetime) => {
			const datetimeCell: Cell = {
				key: 'datetime',
				type: 'cell',
				className: 'ee-date-list-col-hdr ee-rspnsv-table-column-micro date-cell',
				value: <DateCell datetime={datetime} />,
			};

			const cells: Array<Cell> = tickets.map((ticket) => {
				const status = getAssignmentStatus({ datetimeId: datetime.id, ticketId: ticket.id });
				const statusClassName = status && (`${status.toLowerCase()}-assignment` as RelationClassName);

				const className = classNames(
					statusClassName,
					'ee-date-list-col-hdr ee-rspnsv-table-column-huge text-center relation-cell',
					getColClass(ticket)
				);

				return {
					key: ticket.id,
					type: 'cell',
					className,
					value: <BodyCell datetime={datetime} ticket={ticket} />,
				};
			});

			return {
				cells: [datetimeCell, ...cells],
				className: 'ee-ticket-assignments-manager-table-body-row',
				rowClassName: getRowClass(datetime),
				key: datetime.id,
				primary: true,
				type: 'row',
			};
		});
	}, [datetimes, getAssignmentStatus, getColClass, getRowClass, tickets]);
};

export default useGetBodyRows;
