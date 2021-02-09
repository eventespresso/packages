import { reduceRight } from 'ramda';

import { getPriceModifiers, updateBasePriceAmount } from '@eventespresso/predicates';
import { parsedAmount, groupByProp } from '@eventespresso/utils';
import { TpcPriceModifier } from '../types';
import { DataState } from '../data';
import undoParallelModifiers from './undoParallelModifiers';

const calculateBasePrice = (state: DataState): DataState['prices'] => {
	const ticketTotal = parsedAmount(state.ticket?.price);

	const allPrices = state.prices;

	if (!ticketTotal || !allPrices?.length) {
		return state.prices;
	}

	const priceModifiers = getPriceModifiers(allPrices);

	// Since the keys are numberic, it should be sorted in ASC by default
	const orderToPriceMap = groupByProp('order', priceModifiers);

	const newBasePriceAmount = reduceRight(
		(pricesWithSameOrder, currentTotal) => {
			return undoParallelModifiers(currentTotal, pricesWithSameOrder);
		},
		ticketTotal,
		Object.values(orderToPriceMap)
	);

	// Save the price upto 6 decimals places
	const amount = parsedAmount(newBasePriceAmount).toFixed(6);
	const newPrices = updateBasePriceAmount<TpcPriceModifier>({
		prices: state.prices,
		amount: parsedAmount(amount),
	});
	return newPrices;
};

export default calculateBasePrice;
