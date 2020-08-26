import { assocPath } from 'ramda';

import { GlobalModalStateReducer } from './types';

const reducer: GlobalModalStateReducer = (prevState, action) => {
	const { data, type, modalName } = action;

	switch (type) {
		case 'OPEN_MODAL':
			return assocPath([modalName, 'isOpen'], true, prevState);
		case 'CLOSE_MODAL':
			return assocPath([modalName, 'isOpen'], false, prevState);
		case 'SET_MODAL_DATA':
			return assocPath([modalName, 'data'], data, prevState);

		default:
			throw new Error('Unexpected action');
	}
};

export default reducer;
