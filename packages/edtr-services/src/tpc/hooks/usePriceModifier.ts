import { Price, TPCPriceModifier, usePriceTypeForPrice } from '../../';
import { useMemo } from 'react';

const usePriceModifier = (price: Price): TPCPriceModifier => {
	const priceType = usePriceTypeForPrice(price.id);
	return useMemo(
		() => ({
			...price,
			priceType: priceType?.id,
			priceTypeOrder: priceType?.order,
		}),
		[price, priceType?.id, priceType?.order]
	);
};

export default usePriceModifier;
