import { FormStateReducer, StateInitializer, FormState } from './types';

export const initialState: FormState = {
	rRule: '',
	exRule: '',
	dateDetails: {},
	tickets: [],
};

const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	const dataReducer: FormStateReducer = (state, action) => {
		const { rRule, exRule, dateDetails, ticket, tickets, type } = action;

		switch (type) {
			case 'SET_R_RULE':
				return { ...state, rRule };
			case 'SET_EX_RULE':
				return { ...state, exRule };
			case 'SET_DATE_DETAILS':
				return {
					...state,
					dateDetails: {
						...state.dateDetails,
						...dateDetails,
					},
				};
			case 'ADD_TICKET':
				return {
					...state,
					tickets: [...state.tickets, ticket],
				};
			case 'SET_TICKETS':
				return {
					...state,
					tickets,
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
