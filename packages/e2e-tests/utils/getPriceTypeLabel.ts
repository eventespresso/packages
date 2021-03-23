import { allPass, complement } from 'ramda';

import type { TpcPriceModifier } from '@eventespresso/tpc';
import { isPercent, isBasePrice, isDiscount, isTax } from '@eventespresso/predicates';

export const getPriceTypeLabel = (price: TpcPriceModifier): string => {
	switch (true) {
		case isBasePrice(price):
			return 'Base Price';

		case isTax(price):
			return 'Federal Tax';

		case allPass([isPercent, isDiscount])(price):
			return 'Percent Discount';

		case allPass([complement(isPercent), isDiscount])(price):
			return 'Dollar Discount';

		case allPass([isPercent, complement(isDiscount)])(price):
			return 'Percent Surcharge';

		// Although this case is not needed, just to to be clear what is expected.
		case allPass([complement(isPercent), complement(isDiscount)])(price):
		default:
			return 'Dollar Surcharge';
	}
};
