import { pick } from 'ramda';

import { __ } from '@eventespresso/i18n';

import { Intervals, DATE_INTERVALS } from './';
import { intervalsToOptions } from './utils';

export const DEFAULT_DATETIME_FORMAT = 'MMM d, yyyy h:mm aa'; // Aug 19, 2020 3:11 PM

export const endDateAfterStartDateErrorMessage = __('End Date & Time must be set later than the Start Date & Time');

export const startDateBeforeEndDateErrorMessage = __('Start Date & Time must be set before the End Date & Time');

export const unitOptions = intervalsToOptions(
	pick<Intervals, keyof Intervals>(['months', 'weeks', 'days', 'hours', 'minutes'], DATE_INTERVALS),
	true
);
