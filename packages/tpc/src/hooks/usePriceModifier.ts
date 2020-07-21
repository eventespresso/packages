import { TpcPriceModifier } from '../types';
import { Price, usePriceTypeForPrice } from '@eventespresso/edtr-services';
import { useMemo } from 'react';

const usePriceModifier = (price: Price): TpcPriceModifier => {
	const priceType = usePriceTypeForPrice(price.id);
	return useMemo(
		() => ({
			...price,
			priceType: priceType.id,
			priceTypeOrder: priceType.order,
		}),
		[price, priceType.id, priceType.order]
	);
};

export default usePriceModifier;
