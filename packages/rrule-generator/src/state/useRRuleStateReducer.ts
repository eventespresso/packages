import { assocPath } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

import { RRuleStateReducer, StateInitializer } from './types';

const useRRuleStateReducer = (initializer: StateInitializer): RRuleStateReducer => {
	const dataReducer: RRuleStateReducer = (prevState, action) => {
		const {
			after,
			data,
			date,
			day,
			days,
			endMode,
			frequency,
			interval,
			mode,
			month,
			monthYearMode,
			repeatKey,
			type,
			which,
		} = action;

		// dispatching 'SET_DATA' means the state didn't change as a result of user action
		// it was set/reset, so, we won't update the hash in that case
		const state = type === 'SET_DATA' ? prevState : { ...prevState, hash: uuidv4() };

		switch (type) {
			case 'SET_START_DATE':
				return assocPath(['start', 'date'], date, state);
			case 'SET_END_MODE':
				return assocPath(['end', 'mode'], endMode, state);
			case 'SET_END_AFTER':
				return assocPath(['end', 'after'], after, state);
			case 'SET_END_DATE':
				return assocPath(['end', 'date'], date, state);
			case 'SET_REPEAT_FREQUENCY':
				return assocPath(['repeat', 'frequency'], frequency, state);
			case 'SET_REPEAT_INTERVAL':
				return assocPath(['repeat', repeatKey, 'interval'], interval, state);
			case 'SET_REPEAT_MONTH':
				return assocPath(['repeat', 'yearly', monthYearMode, 'month'], month, state);
			case 'SET_REPEAT_DAY':
				return assocPath(['repeat', repeatKey, monthYearMode, 'day'], day, state);
			case 'SET_REPEAT_WHICH':
				return assocPath(['repeat', repeatKey, monthYearMode, 'which'], which, state);
			case 'SET_REPEAT_WEEKLY_DAYS':
				return assocPath(['repeat', 'weekly', 'days'], { ...state.repeat.weekly?.days, ...days }, state);
			case 'SET_REPEAT_MODE':
				return assocPath(['repeat', repeatKey, 'mode'], mode, state);
			case 'SET_DATA':
				return data;
			case 'RESET':
				return initializer(null);

			default:
				throw new Error('Unexpected action');
		}
	};

	return dataReducer;
};

export default useRRuleStateReducer;
