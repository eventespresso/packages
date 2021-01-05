import { useCallback } from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import { filter, pipe } from 'ramda';

import { addZebraStripesOnMobile, getCell } from '@eventespresso/ui-components';
import { filterCellByStartOrEndDate, useLazyDatetime, useShowDatetimeBA } from '@eventespresso/edtr-services';
import { ENTITY_LIST_DATE_TIME_FORMAT } from '@eventespresso/constants';
import { getDatetimeBackgroundColorClassName, datetimeStatus } from '@eventespresso/helpers';
import { shortenGuid } from '@eventespresso/utils';
import type { DatetimesFilterStateManager } from '@eventespresso/edtr-services';
import type { BodyRowGeneratorFn } from '@eventespresso/ee-components';

import DateRegistrationsLink from '../../DateRegistrationsLink';
import DateActionsMenu from '../../datesList/actionsMenu/DateActionsMenu';
import DateCapacity from '../cardView/DateCapacity';
import { EditableName } from '../editable';
import Checkbox from './Checkbox';

type DatesTableBodyRowGen = BodyRowGeneratorFn<DatetimesFilterStateManager>;

const exclude = ['row', 'stripe', 'name', 'actions'];
const addZebraStripes = addZebraStripesOnMobile(exclude);

const useBodyRowGenerator = (): DatesTableBodyRowGen => {
	const getDatetime = useLazyDatetime();
	const [showBulkActions] = useShowDatetimeBA();

	return useCallback<DatesTableBodyRowGen>(
		({ entityId, filterState }) => {
			const datetime = getDatetime(entityId);

			const { displayStartOrEndDate, sortingEnabled } = filterState;

			const bgClassName = getDatetimeBackgroundColorClassName(datetime);
			const id = datetime.dbId || shortenGuid(datetime.id);
			const statusClassName = datetimeStatus(datetime);

			const stripeCell = getCell({
				className: classNames('ee-entity-list-status-stripe', bgClassName),
				key: 'stripe',
				showValueOnMobile: true,
				textAlign: 'center',
				value: datetime.name,
			});

			const bulkActionCheckboxCell =
				showBulkActions &&
				getCell({
					key: 'cell',
					size: 'micro',
					textAlign: 'center',
					value: <Checkbox dbId={datetime.dbId} id={datetime.id} />,
				});

			const IDCell = getCell({
				key: 'id',
				size: 'micro',
				textAlign: 'right',
				value: id,
			});

			const nameCell = getCell({
				className: 'ee-col-name ee-rspnsv-table-hide-on-mobile',
				key: 'name',
				size: 'huge',
				value: sortingEnabled ? (
					datetime.name
				) : (
					<EditableName
						className={'ee-entity-list-text ee-focus-priority-5'}
						entity={datetime}
						view={'table'}
					/>
				),
			});

			const startCell = getCell({
				key: 'start',
				size: 'default',
				value: format(new Date(datetime.startDate), ENTITY_LIST_DATE_TIME_FORMAT),
			});

			const endCell = getCell({
				key: 'end',
				size: 'default',
				value: format(new Date(datetime.endDate), ENTITY_LIST_DATE_TIME_FORMAT),
			});

			const capacityCell = getCell({
				key: 'capacity',
				size: 'tiny',
				textAlign: 'right',
				value: sortingEnabled ? datetime.capacity : <DateCapacity entity={datetime} />,
			});

			const soldCell = getCell({
				key: 'sold',
				size: 'tiny',
				textAlign: 'right',
				value: datetime.sold || 0,
			});

			const registrationsCell = getCell({
				key: 'registrations',
				size: 'smaller',
				textAlign: 'center',
				value: sortingEnabled ? '-' : <DateRegistrationsLink datetime={datetime} />,
			});

			const actionsCell = getCell({
				key: 'actions',
				size: 'big',
				value: sortingEnabled ? '-' : <DateActionsMenu entity={datetime} />,
			});

			const cellsData = [
				stripeCell,
				bulkActionCheckboxCell,
				IDCell,
				nameCell,
				startCell,
				endCell,
				capacityCell,
				soldCell,
				registrationsCell,
				actionsCell,
			].filter(Boolean);

			const filterCells = filter(filterCellByStartOrEndDate(displayStartOrEndDate));

			const cells = pipe(filterCells, addZebraStripes)(cellsData);

			return {
				cells,
				className: statusClassName,
				id: `ee-editor-date-list-view-row-${datetime.id}`,
				key: `row-${datetime.id}`,
				type: 'row',
			};
		},
		[getDatetime, showBulkActions]
	);
};

export default useBodyRowGenerator;
