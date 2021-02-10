import { reduceRight } from 'ramda';

import { getPriceModifiers } from '@eventespresso/predicates';
import { parsedAmount, groupByProp } from '@eventespresso/utils';
import { DataState } from '../data';
import undoParallelModifiers from './undoParallelModifiers';

const calculateBasePrice = (ticketTotal: number, prices: DataState['prices']): number => {
	const parsedTicketTotal = parsedAmount(ticketTotal);

	if (!parsedTicketTotal || !prices?.length) {
		return 0;
	}

	const priceModifiers = getPriceModifiers(prices);

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

	return parsedAmount(amount);
};

export default calculateBasePrice;
