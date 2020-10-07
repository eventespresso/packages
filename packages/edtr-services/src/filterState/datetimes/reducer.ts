import { DatetimesFilterStateReducer } from './types';

const reducer: DatetimesFilterStateReducer = (state, action) => {
	const { displayStartOrEndDate, sales, status, recurrence, type } = action;
	switch (type) {
		case 'SET_DISPLAY_START_OR_END_DATE':
			return { ...state, displayStartOrEndDate };
		case 'SET_SALES':
			return { ...state, sales };
		case 'SET_STATUS':
			return { ...state, status };
		case 'SET_RECURRENCE':
			return { ...state, recurrence };
		default:
			throw new Error('Unknown action');
	}
};

export default reducer;
