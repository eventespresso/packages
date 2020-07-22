import { v4 as uuidv4 } from 'uuid';
import { assocPath, omit } from 'ramda';

import { FormStateReducer, StateInitializer, FormState } from './types';

export const initialState: FormState = {
	rRule: '',
	exRule: '',
	dateDetails: {},
	tickets: {},
};

const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	const dataReducer: FormStateReducer = (state, action) => {
		const { rRule, exRule, dateDetails, id, ticket, type } = action;
		let ticketId: string;

		switch (type) {
			case 'SET_R_RULE':
				return { ...state, rRule };
			case 'SET_EX_RULE':
				return { ...state, exRule };
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
