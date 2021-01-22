import { useMemo } from 'react';

import { useMemoStringify } from '@eventespresso/hooks';
import { isBasePrice } from '@eventespresso/predicates';
import { defaultPriceModifier as defaultPrice } from '../defaultPriceModifier';
import { TPCPriceModifier, usePriceTypes } from '../../';
import { updatePriceModifier } from '../utils';
import { usePriceModifier } from '../hooks';

const useDefaultBasePrice = (): TPCPriceModifier => {
	const allPriceTypes = usePriceTypes();

	const [basePriceType] = useMemo(() => {
		return allPriceTypes.filter(isBasePrice);
	}, [allPriceTypes]);

	const defaultPriceModifier = usePriceModifier(defaultPrice);
	const basePrice = useMemo(() => updatePriceModifier(defaultPriceModifier, basePriceType), [
		basePriceType,
		defaultPriceModifier,
	]);

	return useMemoStringify(basePrice);
};

export default useDefaultBasePrice;
