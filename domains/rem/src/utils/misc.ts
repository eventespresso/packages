import { INTERVALS } from '../constants';
import { OptionsType } from '@eventespresso/adapters';

export const intervalsToOptions = (intervals: typeof INTERVALS): OptionsType => {
	return Object.entries(intervals).map(([value, label]) => ({ value, label }));
};
