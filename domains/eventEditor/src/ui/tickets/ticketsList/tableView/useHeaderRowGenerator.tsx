import { useCallback, useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { Cell, getCell } from '@eventespresso/ui-components';
import { filterCellByStartOrEndDate, useShowTicketBA } from '@eventespresso/edtr-services';
import type { HeaderRowGeneratorFn } from '@eventespresso/ee-components';
import type { TicketsFilterStateManager } from '@eventespresso/edtr-services';

import Checkbox from './Checkbox';

type TicketsTableHeaderRowGen = HeaderRowGeneratorFn<TicketsFilterStateManager>;

const useHeaderRowGenerator = (): TicketsTableHeaderRowGen => {
	const [showBulkActions] = useShowTicketBA();

	const stripeCell = useMemo(
		() =>
			getCell({
				className: 'ee-entity-list-status-stripe',
				key: 'stripe',
				size: 'nano',
				textAlign: 'center',
				value: '',
			}),
		[]
	);

	const checkboxCell = useMemo(
		() =>
			showBulkActions &&
			getCell({
				key: 'checkbox',
				size: 'micro',
				textAlign: 'center',
				value: (
					<div className={'ee-rspnsv-table-hide-on-mobile'}>
						<Checkbox />
					</div>
				),
			}),
		[showBulkActions]
	);

	const IDCell = useMemo(
		() =>
			getCell({
				key: 'id',
				size: 'micro',
				textAlign: 'right',
				value: __('ID'),
			}),
		[]
	);

	const nameCell = useMemo(
		() =>
			getCell({
				key: 'name',
				size: 'huge',
				value: __('Name'),
			}),
		[]
	);

	const startCell = useMemo(
		() =>
			getCell({
				key: 'start',
				size: 'default',
				value: (
					<>
						<span className={'ee-rspnsv-table-long-label'}>{__('Goes on Sale')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('On Sale')}</span>
					</>
				),
			}),
		[]
	);

	const endCell = useMemo(
		() =>
			getCell({
				key: 'end',
				size: 'default',
				value: (
					<>
						<span className={'ee-rspnsv-table-long-label'}>{__('Sale Ends')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('Ends')}</span>
					</>
				),
			}),
		[]
	);

	const priceCell = useMemo(
		() =>
			getCell({
				key: 'price',
				size: 'tiny',
				textAlign: 'right',
				value: __('Price'),
			}),
		[]
	);

	const quantityCell = useMemo(
		() =>
			getCell({
				key: 'quantity',
				size: 'tiny',
				textAlign: 'right',
				value: __('Quantity'),
			}),
		[]
	);

	const soldCell = useMemo(
		() =>
			getCell({
				key: 'sold',
				size: 'tiny',
				textAlign: 'right',
				value: __('Sold'),
			}),
		[]
	);

	const registrationsCell = useMemo(
		() =>
			getCell({
				key: 'registrations',
				size: 'smaller',
				textAlign: 'center',
				value: (
					<>
						<span className={'ee-rspnsv-table-long-label'}>{__('Registrations')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('Regs')}</span>
					</>
				),
			}),
		[]
	);

	const actionsCell = useMemo(
		() =>
			getCell({
				key: 'actions',
				size: 'big',
				textAlign: 'center',
				value: (
					<>
						<span className={'ee-rspnsv-table-long-label'}>{__('Actions')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('Actions')}</span>
					</>
				),
			}),
		[]
	);

	return useCallback<TicketsTableHeaderRowGen>(
		(filterState) => {
			const { displayStartOrEndDate } = filterState;

			const cellsData: Array<Cell> = [
				stripeCell,
				checkboxCell,
				IDCell,
				nameCell,
				startCell,
				endCell,
				priceCell,
				quantityCell,
				soldCell,
				registrationsCell,
				actionsCell,
			];

			const cells = cellsData.filter(Boolean).filter(filterCellByStartOrEndDate(displayStartOrEndDate));

			return {
				cells,
				className: 'ee-editor-ticket-list-items-header-row',
				key: 'ticket-header-row',
				primary: true,
				type: 'row',
			};
		},
		[
			IDCell,
			actionsCell,
			checkboxCell,
			endCell,
			nameCell,
			priceCell,
			quantityCell,
			registrationsCell,
			soldCell,
			startCell,
			stripeCell,
		]
	);
};

export default useHeaderRowGenerator;
