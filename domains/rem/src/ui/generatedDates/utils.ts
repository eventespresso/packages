import { __ } from '@wordpress/i18n';

import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';
import type { TimeZoneTime } from '@eventespresso/services';
import type { DateType } from './types';

export const formatDate = (date: Date, format: TimeZoneTime['formatForSite']): string => {
	return `${format(date, LOCALIZED_DATE_FULL_FORMAT)} ${format(date, TIME_ONLY_12H_SHORT_FORMAT)}`;
};

export const getBgClassName = (type: DateType): string => {
	return `ee-generated-date--${type}`;
};

export const iconClassMap: { [key in DateType]: string } = {
	gDate: 'ee-generated-date--trash',
	rDate: 'ee-generated-date--remove',
	exDate: 'ee-generated-date--add',
};

export const tooltipMap: { [key in DateType]: string } = {
	gDate: __('remove from list\nof generated dates'),
	rDate: __('undo addition of extra date and\nremove from list of generated dates'),
	exDate: __('undo exclusion and add back\ninto list of generated dates'),
};
