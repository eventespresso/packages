import { RRuleStateReducer, StateInitializer } from './types';
import { assocPath } from 'ramda';

const useRRuleStateReducer = (initializer: StateInitializer): RRuleStateReducer => {
	const dataReducer: RRuleStateReducer = (state, action) => {
		const { type, data, date, endMode, after } = action;

		switch (type) {
			case 'SET_START_DATE':
				return assocPath(['start', 'date'], date, state);
			case 'SET_END_MODE':
				return assocPath(['end', 'mode'], endMode, state);
			case 'SET_END_AFTER':
				return assocPath(['end', 'after'], after, state);
			case 'SET_END_DATE':
				return assocPath(['end', 'date'], date, state);
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
