import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { CalendarDateSwitcher, EditDateRangeButton } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/services';
import { getDatetimeStatusTextLabel } from '@eventespresso/helpers';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import { useTimeZoneTime } from '@eventespresso/services';
import type { DateItemProps } from '../types';

const DateCardSidebar: React.FC<DateItemProps> = ({ entity: date }) => {
	const { displayStartOrEndDate } = useDatesListFilterState();
	const { updateEntity } = useDatetimeMutator(date.id);
	const { siteTimeToUtc } = useTimeZoneTime();

	const onEditHandler = useCallback(
		(dates: string[]): void => {
			const [start, end] = dates;
			// convert start & end dates to proper UTC "startDate" and "endDate"
			const startDate = siteTimeToUtc(new Date(start)).toISOString();
			const endDate = siteTimeToUtc(new Date(end)).toISOString();
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
				header={__('Edit Event Date Start and End Dates')}
				onEditHandler={onEditHandler}
				startDate={date.startDate}
				tooltip={__('edit start and end dates')}
			/>
			<div className={'ee-ticket-status-label'}>{statusText}</div>
		</>
	) : null;
};

export default React.memo(DateCardSidebar, getPropsAreEqual(['entity', 'cacheId']));
