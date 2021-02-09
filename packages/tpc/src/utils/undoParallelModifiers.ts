import { parsedAmount } from '@eventespresso/utils';
import { TpcPriceModifier } from '../types';

const undoParallelModifiers = (subTotal: number, modifiers: Array<TpcPriceModifier>): number => {
	const modifications = modifiers.reduce(
		({ percents, fixedPrices }, { amount, isDiscount, isPercent }) => {
			const priceAmount = parsedAmount(amount) || 0;

			const newAmount = isDiscount ? -priceAmount : priceAmount;

			return isPercent
				? {
						fixedPrices,
						percents: percents + newAmount,
				  }
				: {
						fixedPrices: fixedPrices + newAmount,
						percents,
				  };
		},
		{
			percents: 0,
			fixedPrices: 0,
		}
	);

	const fixedPriceModifications = modifications.fixedPrices;

	const afterPercentMods = subTotal / (1 + modifications.percents / 100);

	return afterPercentMods - fixedPriceModifications;
};

export default undoParallelModifiers;
