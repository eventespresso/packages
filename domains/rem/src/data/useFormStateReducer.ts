import { v4 as uuidv4 } from 'uuid';
import { assocPath } from 'ramda';

import { FormStateReducer, StateInitializer, FormState } from './types';

export const initialState: FormState = {
	rRule: '',
	exRule: '',
	dateDetails: {},
	tickets: {},
};

const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	const dataReducer: FormStateReducer = (state, action) => {
		const { rRule, exRule, dateDetails, ticket, type } = action;
		let id: string;

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
				id = ticket?.id || uuidv4();
				return assocPath(['tickets', id], ticket, state);
			case 'RESET':
				return initializer(initialState);
			default:
				throw new Error('Unexpected action');
		}
	};

	return dataReducer;
};

export default useFormStateReducer;
