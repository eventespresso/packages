import { reduce } from 'ramda';

import { getBasePrice, getPriceModifiers } from '@eventespresso/predicates';
import { parsedAmount, groupByProp } from '@eventespresso/utils';

import { DataState } from '../data';
import applyParallelModifiers from './applyParallelModifiers';

const calculateTicketTotal = (state: DataState): DataState['ticket']['price'] => {
	const ticket = state?.ticket;
	if (!ticket) {
		return null;
	}
	const allPrices = state?.prices;

	// if there is no wealth or or a king, you know what happens
	if (!allPrices?.length || !getBasePrice(allPrices)) {
		return ticket.price;
	}

	// lets honour the king of prices
	const basePrice = getBasePrice(allPrices);
	const basePriceAmount = parsedAmount(basePrice.amount);

	// if the king has no value, it's not good for the "story"
	if (!basePriceAmount) {
		return 0;
	}

	// if the battle lasts this far, pawns also matter
	const priceModifiers = getPriceModifiers(allPrices);

	// lets divide them into teams based on ther `order`
	// Since the keys are numberic, it should be sorted by default
	const orderToPriceMap = groupByProp('order', priceModifiers);

	// final nail in the coffin
	const newTicketTotal = reduce(
		(currentTotal, pricesWithSameOrder) => {
			return applyParallelModifiers(currentTotal, pricesWithSameOrder);
		},
		basePriceAmount,
		Object.values(orderToPriceMap)
	);

	return newTicketTotal;
};

export default calculateTicketTotal;
