import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setSeconds } from 'date-fns';

import { NOW } from '@eventespresso/constants';
import { setTimeToNoon } from '@eventespresso/dates';
import { RRuleStateManager as RSM, RRuleState } from '../state';
import { DEFAULT_CONFIG } from '../context';

export const getNumericValue = (value: unknown, defaultValue?: 0): number => {
	// Convert input from a string to a number
	const numericValue = Math.abs(value as number);
	// Check if is a number and is less than 1000
	return isNaN(numericValue) ? defaultValue : numericValue;
};

export const useIntervalUpdater = (
	repeatKey: Parameters<RSM['setRepeatInterval']>[0],
	setRepeatInterval: RSM['setRepeatInterval']
) => {
	return useCallback(
		(value) => {
			setRepeatInterval(repeatKey, getNumericValue(value));
		},
		[repeatKey, setRepeatInterval]
	);
};

export const getDefaultRRuleState = (config = DEFAULT_CONFIG): RRuleState => {
	// if time picker is enabled, set the seconds to 0, otherwise set the time to noon
	const date = config?.enableTimepicker ? setSeconds(NOW, 0) : setTimeToNoon(NOW);
	return {
		hash: uuidv4(),
		start: {
			date,
		},
		repeat: {
			frequency: config?.frequencies?.[0] || 'YEARLY',
			yearly: {
				mode: config?.yearlyModes?.[0] || 'ON',
				on: {
					month: 'Jan',
					day: 1,
				},
				onThe: {
					month: 'Jan',
					day: 'MO',
					which: 'FIRST',
				},
			},
			monthly: {
				mode: config?.monthlyModes?.[0] || 'ON',
				interval: 1,
				on: {
					day: 1,
				},
				onThe: {
					day: 'MO',
					which: 'FIRST',
				},
			},
			weekly: {
				interval: 1,
				days: {
					MO: false,
					TU: false,
					WE: false,
					TH: false,
					FR: false,
					SA: false,
					SU: false,
				},
			},
			daily: {
				interval: 1,
			},
			hourly: {
				interval: 1,
			},
		},
		end: {
			mode: config?.endModes?.[0] || 'NEVER',
			after: 1,
			date,
		},
	};
};
