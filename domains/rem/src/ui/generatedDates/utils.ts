import { __, sprintf } from '@eventespresso/i18n';
import { format } from 'date-fns';

import { LOCALIZED_DATE_FULL_FORMAT, TIME_ONLY_12H_SHORT_FORMAT } from '@eventespresso/constants';
import type { DateType, GeneratedDateClassName } from './types';

/**
 * Formats the date in date and time format.
 * It is assumed that the date that comes from rrle-generator is in site timezone,
 * so no conversion to site timezone is needed.
 */
export const formatDate = (date: Date): string => {
	return `${format(date, LOCALIZED_DATE_FULL_FORMAT)} ${format(date, TIME_ONLY_12H_SHORT_FORMAT)}`;
};

export const getBgClassName = (type: DateType): GeneratedDateClassName => {
	return `ee-generated-date--${type}` as GeneratedDateClassName;
};

export const iconClassMap: { [key in DateType]: string } = {
	gDate: 'ee-generated-date--trash',
	rDate: 'ee-generated-date--remove',
	exDate: 'ee-generated-date--add',
};

export const tooltipMap: { [key in DateType]: string } = {
	gDate: sprintf(
		/* translators: remove from list(linebreak)of generated dates */
		__('remove from list%sof generated dates'),
		'\n'
	),
	rDate: sprintf(
		/* translators: undo addition of extra date and(linebreak)remove from list of generated dates */
		__('undo addition of extra date and%sremove from list of generated dates'),
		'\n'
	),
	exDate: sprintf(
		/* translators: undo exclusion and add back(linebreak)into list of generated dates */
		__('undo exclusion and add back%sinto list of generated dates'),
		'\n'
	),
};
