import { EdtrStateReducer } from './types';

const reducer: EdtrStateReducer = (state, action) => {
	const { isRehydrated, pricesPollInterval, type, visibleDatetimeIds, visibleTicketIds } = action;

	switch (type) {
		case 'SET_IS_REHYDRATED':
			return { ...state, isRehydrated };
		case 'SET_VISIBLE_DATETIME_IDS':
			return { ...state, visibleDatetimeIds };
		case 'SET_VISIBLE_TICKET_IDS':
			return { ...state, visibleTicketIds };
		case 'SET_PRICES_POLL_INTERVAL':
			return { ...state, pricesPollInterval };

		default:
			throw new Error('Unexpected action');
	}
};

export default reducer;
