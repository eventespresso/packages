import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';

import { getDefaultTaxes } from '@eventespresso/predicates';
import { usePrices, useTPCDataState } from '@eventespresso/edtr-services';
import { usePricesPollInterval } from '../hooks';

const DefaultTaxesInfo: React.FC = () => {
	const allPrices = usePrices();
	const defaultTaxPrices = getDefaultTaxes(allPrices);

	const { prices } = useTPCDataState();
	const tpcDefaultTaxPrices = getDefaultTaxes(prices);
	const [pricesPollInterval, setPricesPollInterval] = usePricesPollInterval();

	useEffect(() => {
		return () => {
			// disable polling on unmount.
			pricesPollInterval && setPricesPollInterval(0);
		};
	}, [pricesPollInterval, setPricesPollInterval]);

	const newTaxesFetched = pricesPollInterval && defaultTaxPrices.length !== tpcDefaultTaxPrices.length;

	return newTaxesFetched ? (
		<div className='ee-tpc__default-taxes-info'>
			{__('New default taxes are available. Click the - Add default taxes - button to add them now.')}
		</div>
	) : null;
};

export default DefaultTaxesInfo;
