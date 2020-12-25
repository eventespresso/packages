import React from 'react';
import { parseISO } from 'date-fns';

import { useConfig, useTimeZoneTime } from '@eventespresso/services';
import { EditDateRangeButton as EditDateRangeButtonUI } from '@eventespresso/components';

import type { EditDateButtonProps } from './types';

export const EditDateRangeButton: React.FC<EditDateButtonProps> = ({ startDate, endDate, ...props }) => {
	const { dateTimeFormats, locale } = useConfig();
	const { utcToSiteTime } = useTimeZoneTime();

	const startDateInSiteTime = utcToSiteTime(parseISO(startDate));
	const endDateInSiteTime = utcToSiteTime(parseISO(endDate));

	return (
		<EditDateRangeButtonUI
			dateTimeFormat={dateTimeFormats.dateTimeFormat}
			locale={locale.user}
			startDate={startDateInSiteTime}
			endDate={endDateInSiteTime}
			{...props}
		/>
	);
};