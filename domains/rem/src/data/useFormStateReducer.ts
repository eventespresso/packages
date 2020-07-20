import { FormStateReducer, StateInitializer, FormState } from './types';

export const initialState: FormState = {
	rRule: '',
	exRule: '',
	dateDetails: {},
	tickets: [],
};

const useFormStateReducer = (initializer: StateInitializer): FormStateReducer => {
	const dataReducer: FormStateReducer = (state, action) => {
		const { rRule, exRule, dateDetails, tickets, type } = action;

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
			case 'SET_TICKETS':
				return {
					...state,
					tickets: {
						...state.tickets,
						...tickets,
					},
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
