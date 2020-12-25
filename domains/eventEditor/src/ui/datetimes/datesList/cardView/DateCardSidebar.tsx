import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { CalendarDateSwitcher, EditDateRangeButton } from '@eventespresso/ee-components';
import { getDatetimeStatusTextLabel } from '@eventespresso/helpers';
import { useDatesListFilterState } from '@eventespresso/edtr-services';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';
import type { DateRange } from '@eventespresso/dates';
import type { DateItemProps } from '../types';

const DateCardSidebar: React.FC<DateItemProps> = ({ entity: date }) => {
	const { displayStartOrEndDate } = useDatesListFilterState();
	const { updateEntity } = useDatetimeMutator(date.id);
	const { siteTimeToUtc } = useTimeZoneTime();

	const onEditHandler = useCallback(
		([start, end]: DateRange): void => {
			// convert start & end dates to proper UTC "startDate" and "endDate"
			const startDate = siteTimeToUtc(start).toISOString();
			const endDate = siteTimeToUtc(end).toISOString();
			updateEntity({ startDate, endDate });
		},
		[siteTimeToUtc, updateEntity]
	);
	const statusText = getDatetimeStatusTextLabel(date);

	return date ? (
		<>
			<CalendarDateSwitcher
				displayDate={displayStartOrEndDate}
				endDate={date.endDate}
				startDate={date.startDate}
			/>
			<EditDateRangeButton
				endDate={date.endDate}
				header={__('Edit Event Date')}
				onEditHandler={onEditHandler}
				startDate={date.startDate}
				tooltip={__('edit start and end dates')}
			/>
			<div className={'ee-ticket-status-label'}>{statusText}</div>
		</>
	) : null;
};

export default DateCardSidebar;
