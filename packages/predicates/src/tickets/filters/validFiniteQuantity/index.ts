import { is } from 'ramda';

import type { Ticket } from '@eventespresso/edtr-services';

/**
 * @param {Object} ticket    event ticket object
 * @return {boolean} true if qty property is valid and NOT infinite
 */
const validFiniteQuantity = (ticket: Ticket): boolean => {
	const { quantity } = ticket;
	const isNumber = is(Number, quantity);
	const isFinite = Number.isFinite(quantity);

	return isNumber && isFinite && Math.round(quantity) > 0;
};

export default validFiniteQuantity;
