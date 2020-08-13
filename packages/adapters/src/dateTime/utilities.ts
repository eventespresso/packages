import { dateFormats, timeFormats } from '@eventespresso/constants';

/**
 * converts WordPress date formats to work with react-date-picker
 */
export const convertWordPressDateFormat = (dateFormat: string): string => {
	let newFormat = dateFormat;
	for (const find in dateFormats) {
		if (dateFormats.hasOwnProperty(find)) {
			const replace = dateFormats[find];
			newFormat = newFormat.replace(find, replace);
		}
	}

	return newFormat;
};

/**
 * converts WordPress time formats to work with react-time-picker
 */
export const convertWordPressTimeFormat = (timeFormat: string): string => {
	const is12HourTime = timeFormat.indexOf('g') !== -1 || timeFormat.indexOf('h') !== -1;
	let newFormat = timeFormat;
	for (const find in timeFormats) {
		if (timeFormats.hasOwnProperty(find)) {
			const replace = timeFormats[find];
			newFormat = newFormat.replace(find, replace);
		}
	}
	const hasAMPM = newFormat.indexOf('a') !== -1;
	// make sure am/pm is added back in for 12 hour time formats
	return is12HourTime && !hasAMPM ? `${newFormat} a` : newFormat;
};
