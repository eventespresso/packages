import { useCallback } from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import { filter, pipe } from 'ramda';

import { addZebraStripesOnMobile, CellData } from '@eventespresso/ui-components';
import { filterCellByStartOrEndDate, useLazyDatetime } from '@eventespresso/edtr-services';
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

	return useCallback<DatesTableBodyRowGen>(
		({ entityId, filterState }) => {
			const datetime = getDatetime(entityId);

			const { displayStartOrEndDate, showBulkActions } = filterState;

			const bgClassName = getDatetimeBackgroundColorClassName(datetime);
			const id = datetime.dbId || shortenGuid(datetime.id);
			const statusClassName = datetimeStatus(datetime);

			const stripeCell: CellData = {
				className: classNames('ee-entity-list-status-stripe', bgClassName),
				key: 'stripe',
				showValueOnMobile: true,
				textAlign: 'center',
				value: datetime.name,
			};

			const bulkActionCheckboxCell: CellData = showBulkActions && {
				key: 'cell',
				size: 'micro',
				textAlign: 'center',
				value: <Checkbox dbId={datetime.dbId} id={datetime.id} />,
			};

			const idCell: CellData = {
				key: 'id',
				size: 'micro',
				textAlign: 'end',
				value: id,
			};

			const nameCell: CellData = {
				className: 'ee-col-name ee-rspnsv-table-hide-on-mobile',
				key: 'name',
				size: 'huge',
				value: (
					<EditableName
						className={'ee-entity-list-text ee-focus-priority-5'}
						entity={datetime}
						view={'table'}
					/>
				),
			};

			const startCell: CellData = {
				key: 'start',
				size: 'default',
				value: format(new Date(datetime.startDate), ENTITY_LIST_DATE_TIME_FORMAT),
			};

			const endCell: CellData = {
				key: 'end',
				size: 'default',
				value: format(new Date(datetime.endDate), ENTITY_LIST_DATE_TIME_FORMAT),
			};

			const capacityCell: CellData = {
				className: 'ee-col__inline-edit',
				key: 'capacity',
				size: 'tiny',
				textAlign: 'end',
				value: <DateCapacity entity={datetime} />,
			};

			const soldCell: CellData = {
				key: 'sold',
				size: 'tiny',
				textAlign: 'end',
				value: datetime.sold || 0,
			};

			const registrationsCell: CellData = {
				key: 'registrations',
				size: 'smaller',
				textAlign: 'center',
				value: <DateRegistrationsLink datetime={datetime} />,
			};

			const actionsCell: CellData = {
				key: 'actions',
				size: 'big',
				textAlign: 'center',
				value: <DateActionsMenu entity={datetime} />,
			};

			const cellsData: Array<CellData> = [
				stripeCell,
				bulkActionCheckboxCell,
				idCell,
				nameCell,
				startCell,
				endCell,
				capacityCell,
				soldCell,
				registrationsCell,
				actionsCell,
			].filter(
				// removes falsy values
				Boolean
			);

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
		[getDatetime]
	);
};

export default useBodyRowGenerator;
