import { defaultDateFormat, defaultTimeFormat } from './defaultDateTimeFormats';
import type { DateTimeFormatsProps } from './types';

export const DateTimeFormats = (formats: DateTimeFormatsProps): DateTimeFormatsProps => {
	const maybeDefault = {
		dateFormat: formats?.dateFormat || defaultDateFormat,
		timeFormat: formats?.timeFormat || defaultTimeFormat,
		dateTimeFormat: '',
	};

	return {
		...maybeDefault,
		dateTimeFormat: maybeDefault?.dateFormat + ' ' + maybeDefault?.timeFormat,
	};
};
