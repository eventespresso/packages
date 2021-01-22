import { filter, reduce } from 'ramda';

import { isNotBasePrice, sortByPriceOrderIdDesc, updateBasePriceAmount } from '@eventespresso/predicates';
import { parsedAmount } from '@eventespresso/utils';

import { TPCDataState, TPCPriceModifier } from '../';
import basePriceCalculator from './basePriceCalculator';

const calculateBasePrice = (state: TPCDataState): TPCDataState['prices'] => {
	const ticket = state?.ticket;
	if (!ticket) {
		return state.prices;
	}

	const allPrices = state?.prices;
	if (!allPrices?.length) {
		return state.prices;
	}
	// we're calculating the base price so we don't want to include it in the calculations
	const withoutBasePrice = filter<TPCPriceModifier>(isNotBasePrice, allPrices);
	const sortedModifiers = sortByPriceOrderIdDesc(withoutBasePrice);
	// now extract the value for "total" or set to 0
	const ticketTotal = ticket?.price || 0;
	const newBasePrice = reduce<TPCPriceModifier, number>(basePriceCalculator, ticketTotal, sortedModifiers);
	// Save the price upto 6 decimals places
	const amount = parsedAmount(newBasePrice).toFixed(6);
	const newPrices = updateBasePriceAmount<TPCPriceModifier>({
		prices: state.prices,
		amount: parsedAmount(amount),
	});
	return newPrices;
};

export default calculateBasePrice;
