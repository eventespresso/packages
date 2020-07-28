import { v4 as uuidv4 } from 'uuid';
import { assocPath, omit, without } from 'ramda';

import { FormStateReducer, StateInitializer, FormState } from './types';

export const initialState: FormState = {
	rRule: '',
	exRule: '',
	rDates: [],
	exDates: [],
	dateDetails: {},
	tickets: {},
};

const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	const dataReducer: FormStateReducer = (state, action) => {
		const { date, rRule, exRule, dateDetails, id, ticket, type } = action;
		let ticketId: string;

		switch (type) {
			case 'SET_R_RULE':
				return { ...state, rRule };
			case 'SET_EX_RULE':
				return { ...state, exRule };
			case 'ADD_R_DATE':
				return {
					...state,
					rDates: [...state.rDates, date],
				};
			case 'ADD_EX_DATE':
				return {
					...state,
					exDates: [...state.exDates, date],
				};
			case 'REMOVE_R_DATE':
				return {
					...state,
					rDates: without([date], state.rDates),
				};
			case 'REMOVE_EX_DATE':
				return {
					...state,
					exDates: without([date], state.exDates),
				};
			case 'SET_DATE_DETAILS':
				return {
					...state,
					dateDetails,
				};
			case 'ADD_TICKET':
			case 'UPDATE_TICKET':
				// use id to update and uuid to add new
				ticketId = id || uuidv4();
				// we need to make the id inside ticket and in tickets object same
				return assocPath(['tickets', ticketId], { ...ticket, id: ticketId }, state);
			case 'DELETE_TICKET':
				return {
					...state,
					tickets: omit([id], state.tickets),
				};
			case 'RESET':
				return initializer(initialState);
			default:
				throw new Error('Unexpected action');
		}
	};

	return dataReducer;
};

export default useFormStateReducer;
