import { EdtrStateReducer } from './types';

const reducer: EdtrStateReducer = (state, action) => {
	const { type, visibleDatetimeIds, visibleTicketIds } = action;

	switch (type) {
		case 'SET_VISIBLE_DATETIME_IDS':
			return { ...state, visibleDatetimeIds };
		case 'SET_VISIBLE_TICKET_IDS':
			return { ...state, visibleTicketIds };

		default:
			throw new Error('Unexpected action');
	}
};

export default reducer;
