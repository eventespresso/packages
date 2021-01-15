import type { KeysOfType } from '@eventespresso/utils';
import type { DatetimeBaseInput } from './types';

export const NUMERIC_FIELDS: Array<KeysOfType<DatetimeBaseInput, number>> = [
	'capacity',
	'eventId',
	'order',
	'reserved',
	'sold',
];
