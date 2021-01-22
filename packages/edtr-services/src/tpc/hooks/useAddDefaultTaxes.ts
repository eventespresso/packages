import { useCallback } from 'react';

import { getDefaultTaxes, sortByPriceOrderIdAsc, getGuids } from '@eventespresso/predicates';
import { usePrices } from '../../';
import useTPCDataState from '../data/useTPCDataState';
import usePriceToTpcModifier from '../data/usePriceToTpcModifier';

import usePricesPollInterval from './usePricesPollInterval';

const useAddDefaultTaxes = (): VoidFunction => {
	const allPrices = usePrices();
	const defaultTaxPrices = getDefaultTaxes(allPrices);

	const { prices, setPrices } = useTPCDataState();
	const [, setPricesPollInterval] = usePricesPollInterval();

	const convertPriceToTpcModifier = usePriceToTpcModifier();

	return useCallback(() => {
		// disable polling.
		setPricesPollInterval(0);

		const priceIds = getGuids(prices);

		// Filter out the taxes that have already been added
		const newTpcDefaultTaxPrices = defaultTaxPrices.filter((price) => !priceIds.includes(price.id));
		const newTpcDefaultTaxPriceModifiers = newTpcDefaultTaxPrices.map(convertPriceToTpcModifier);

		const newPrices = [...prices, ...newTpcDefaultTaxPriceModifiers];

		//sort'em
		const sortedPrices = sortByPriceOrderIdAsc(newPrices);

		setPrices(sortedPrices);
	}, [convertPriceToTpcModifier, defaultTaxPrices, prices, setPrices, setPricesPollInterval]);
};

export default useAddDefaultTaxes;
