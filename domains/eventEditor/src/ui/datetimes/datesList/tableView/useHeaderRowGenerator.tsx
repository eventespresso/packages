import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { filterCellByStartOrEndDate, useShowDatetimeBA } from '@eventespresso/edtr-services';
import { Cell, getCell } from '@eventespresso/ui-components';

import type { HeaderRowGeneratorFn } from '@eventespresso/ee-components';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';

import Checkbox from './Checkbox';

type DatesTableHeaderRowGen = HeaderRowGeneratorFn<DatetimesFilterStateManager>;

const useHeaderRowGenerator = (): DatesTableHeaderRowGen => {
	const [showBulkActions] = useShowDatetimeBA();

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

	const idCell = useMemo(
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
						<span className={'ee-rspnsv-table-long-label'}>{__('Start Date')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('Start')}</span>
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
						<span className={'ee-rspnsv-table-long-label'}>{__('End Date')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('End')}</span>
					</>
				),
			}),
		[]
	);

	const capacityCell = useMemo(
		() =>
			getCell({
				className: 'ee-col-capacity',
				key: 'capacity',
				size: 'tiny',
				textAlign: 'right',
				value: (
					<>
						<span className={'ee-rspnsv-table-long-label'}>{__('Capacity')}</span>
						<span className={'ee-rspnsv-table-short-label'}>{__('Cap')}</span>
					</>
				),
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
						<span className={'ee-rspnsv-table-long-label'}>{__('Reg list')}</span>
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

	return useCallback<DatesTableHeaderRowGen>(
		(filterState) => {
			const displayStartOrEndDate = filterState?.displayStartOrEndDate;

			const cellsData: Array<Cell> = [
				stripeCell,
				checkboxCell,
				idCell,
				nameCell,
				startCell,
				endCell,
				capacityCell,
				soldCell,
				registrationsCell,
				actionsCell,
			];

			const cells = cellsData
				.filter(
					// removes falsy values
					Boolean
				)
				.filter(filterCellByStartOrEndDate(displayStartOrEndDate));

			return {
				cells,
				className: 'ee-editor-date-list-items-header-row',
				key: 'dates-list-header',
				primary: true,
				type: 'row',
			};
		},
		[
			actionsCell,
			capacityCell,
			checkboxCell,
			endCell,
			idCell,
			nameCell,
			registrationsCell,
			soldCell,
			startCell,
			stripeCell,
		]
	);
};

export default useHeaderRowGenerator;
