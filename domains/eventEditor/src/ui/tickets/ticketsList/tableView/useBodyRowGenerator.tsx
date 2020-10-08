import React, { useCallback } from 'react';
import { format } from 'date-fns';
import { filter, pipe } from 'ramda';

import { Cell, CurrencyDisplay, addZebraStripesOnMobile } from '@eventespresso/components';
import { filterCellByStartOrEndDate } from '@eventespresso/edtr-services';
import { ENTITY_LIST_DATE_TIME_FORMAT } from '@eventespresso/constants';
import { getTicketBackgroundColorClassName, ticketStatus } from '@eventespresso/helpers';
import { shortenGuid } from '@eventespresso/utils';
import type { BodyRowGeneratorFn } from '@eventespresso/components';
import type { Ticket, TicketsFilterStateManager } from '@eventespresso/edtr-services';

import TicketActionsMenu from '@edtrUI/tickets/ticketsList/actionsMenu/TicketActionsMenu';
import TicketQuantity from '../cardView/TicketQuantity';
import { EditableName } from '../editable';
import TicketRegistrationsLink from '../../TicketRegistrationsLink';
import Checkbox from './Checkbox';

import '../../../../../../../packages/styles/src/root/entity-status.css';

type TicketsTableBodyRowGen = BodyRowGeneratorFn<Ticket, TicketsFilterStateManager>;

const useBodyRowGenerator = (): TicketsTableBodyRowGen => {
	return useCallback<TicketsTableBodyRowGen>(({ entity: ticket, filterState }) => {
		const { displayStartOrEndDate, sortingEnabled } = filterState;

		const bgClassName = getTicketBackgroundColorClassName(ticket);
		const id = ticket.dbId || shortenGuid(ticket.id);
		const statusClassName = ticketStatus(ticket);

		const name = {
			key: 'name',
			type: 'cell',
			className:
				'ee-ticket-list-cell ee-ticket-list-col-name ee-col-name ee-rspnsv-table-column-bigger ee-rspnsv-table-hide-on-mobile',
			value: sortingEnabled ? (
				ticket.name
			) : (
				<EditableName className={'ee-entity-list-text ee-focus-priority-5'} entity={ticket} view={'table'} />
			),
		};

		const quantity = {
			key: 'quantity',
			type: 'cell',
			className: 'ee-ticket-list-cell ee-ticket-list-col-quantity ee-rspnsv-table-column-tiny ee-number-column',
			value: sortingEnabled ? ticket.quantity : <TicketQuantity entity={ticket} />,
		};

		const cellsData: Array<Cell> = [
			{
				key: 'stripe',
				type: 'cell',
				className: `ee-ticket-list-cell ee-entity-list-status-stripe ${bgClassName} ee-rspnsv-table-column-nano`,
				value: <div className={'ee-rspnsv-table-show-on-mobile'}>{ticket.name}</div>,
			},
			{
				key: 'checkbox',
				type: 'cell',
				className: 'ee-date-list-cell ee-date-list-col-checkbox ee-rspnsv-table-column-micro',
				value: <Checkbox id={ticket.id} />,
			},
			{
				key: 'id',
				type: 'cell',
				className: 'ee-ticket-list-cell ee-ticket-list-col-id ee-rspnsv-table-column-nano ee-number-column',
				value: id,
			},
			name,
			{
				key: 'start',
				type: 'cell',
				className: 'ee-ticket-list-cell ee-ticket-list-col-start ee-rspnsv-table-column-default',
				value: format(new Date(ticket.startDate), ENTITY_LIST_DATE_TIME_FORMAT),
			},
			{
				key: 'end',
				type: 'cell',
				className: 'ee-ticket-list-cell ee-ticket-list-col-end ee-rspnsv-table-column-default',
				value: format(new Date(ticket.endDate), ENTITY_LIST_DATE_TIME_FORMAT),
			},
			{
				key: 'price',
				type: 'cell',
				className:
					'ee-ticket-list-col-hdr ee-ticket-list-col-price ee-rspnsv-table-column-tiny ee-number-column',
				value: <CurrencyDisplay value={ticket.price} />,
			},
			quantity,
			{
				key: 'sold',
				type: 'cell',
				className: 'ee-ticket-list-cell ee-ticket-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
				value: ticket.sold,
			},
			{
				key: 'registrations',
				type: 'cell',
				className:
					'ee-ticket-list-cell ee-ticket-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column',
				value: sortingEnabled ? '-' : <TicketRegistrationsLink ticket={ticket} />,
			},
			{
				key: 'actions',
				type: 'cell',
				className: 'ee-ticket-list-cell ee-actions-column ee-rspnsv-table-column-big',
				value: sortingEnabled ? '-' : <TicketActionsMenu entity={ticket} />,
			},
		];

		const exclude = ['row', 'stripe', 'name', 'actions'];

		const cells = pipe(
			filter(filterCellByStartOrEndDate(displayStartOrEndDate)),
			addZebraStripesOnMobile(exclude)
		)(cellsData);

		return {
			cells,
			className: `ee-editor-date-list-view-row ${statusClassName}`,
			id: `ee-editor-date-list-view-row-${ticket.id}`,
			key: `row-${ticket.id}`,
			type: 'row',
		};
	}, []); // no deps
};

export default useBodyRowGenerator;
