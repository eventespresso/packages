import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';
import type { TimeZoneTime } from '@eventespresso/services';
import type { DateType } from './types';

export const formatDate = (date: Date, format: TimeZoneTime['formatForSite']): string => {
	return `${format(date, LOCALIZED_DATE_FULL_FORMAT)} ${format(date, TIME_ONLY_12H_SHORT_FORMAT)}`;
};

export const getBgClassName = (type: DateType): string => {
	return `ee-generated-dates-bg--${type}`;
};
