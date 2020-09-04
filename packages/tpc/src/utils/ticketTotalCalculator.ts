import type { Price } from '@eventespresso/edtr-services';
import { parsedAmount } from '@eventespresso/utils';

const ticketTotalCalculator = (
	currentTotal: number,
	{ isBasePrice, isPercent, isDiscount, amount: priceAmount }: Price
): number => {
	const amount = parsedAmount(priceAmount || 0);
	const total = parsedAmount(currentTotal || 0);
	if (isBasePrice) {
		// basic addition
		return total + amount;
	}
	if (isDiscount) {
		// subtract percent or dollar discount
		return isPercent ? total - (amount / 100) * total : total - amount;
	}
	// add percent or dollar surcharge
	return isPercent ? total + (amount / 100) * total : total + amount;
};

export default ticketTotalCalculator;
