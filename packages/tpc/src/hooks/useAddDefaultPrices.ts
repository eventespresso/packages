import { useCallback } from 'react';

import { getDefaultPrices } from '@eventespresso/predicates';
import { usePrices } from '@eventespresso/edtr-services';
import { useDataState } from '../data';
import usePrepTemplatePrices from './usePrepTemplatePrices';

const useAddDefaultPrices = (): VoidFunction => {
	const allPrices = usePrices();

	const { setPrices } = useDataState();

	const prepTemplatePrices = usePrepTemplatePrices();

	return useCallback(() => {
		//sort'em
		const sortedPrices = prepTemplatePrices(getDefaultPrices(allPrices));

		setPrices(sortedPrices);
	}, [allPrices, prepTemplatePrices, setPrices]);
};

export default useAddDefaultPrices;
