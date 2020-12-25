import React from 'react';

import { useTimeZoneTime } from '@eventespresso/services';
import { TimezoneTimeInfo as TimezoneTimeInfoUI } from '@eventespresso/ui-components';

export interface TimezoneTimeInfoProps {
	className?: string;
	date: Date;
}

export const TimezoneTimeInfo: React.FC<TimezoneTimeInfoProps> = ({ date, ...props }) => {
	const { formatDateForSite, formatDateForUser, formatUtcDateForSite } = useTimeZoneTime();

	return (
		<TimezoneTimeInfoUI
			{...props}
			siteTime={formatDateForSite(date)}
			userTime={formatDateForUser(date)}
			utcTime={formatUtcDateForSite(date)}
		/>
	);
};
