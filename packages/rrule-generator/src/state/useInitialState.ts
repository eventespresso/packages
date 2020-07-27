import { useCallback, useMemo } from 'react';
import { RRuleConfig } from '../types';
import { StateInitializer, RRuleState } from './types';

/**
 * Initializes the state dynamically by using the config.
 */
const useInitialState = (config: RRuleConfig): StateInitializer => {
	const state = useMemo<RRuleState>(
		() => ({
			start: {
				date: new Date(),
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
				date: new Date(),
			},
		}),
		[config?.endModes, config?.frequencies, config?.monthlyModes, config?.yearlyModes]
	);

	return useCallback<StateInitializer>(
		(initialState) => {
			return { ...initialState, ...state };
		},
		[state]
	);
};

export default useInitialState;
