import { parseISO } from 'date-fns';

import { useConfig, useTimeZoneTime } from '@eventespresso/services';
import { EditDateRangeButton as EditDateRangeButtonUI } from '@eventespresso/ui-components';

import type { EditDateButtonProps } from './types';
import { TimezoneTimeInfo } from '../TimezoneTimeInfo';

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
			TimezoneTimeInfo={TimezoneTimeInfo}
			{...props}
		/>
	);
};
