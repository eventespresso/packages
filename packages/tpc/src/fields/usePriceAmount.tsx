import { useCallback, useMemo } from 'react';

import useTPCDataState from '@eventespresso/edtr-services/src/tpc/data/useTPCDataState';
import type { BaseFieldProps, UsePrice, UsePriceAmount } from './types';

type BFP = BaseFieldProps;

const usePriceAmount = ({ field, price }: UsePriceAmount): UsePrice => {
	const { updatePrice } = useTPCDataState();

	const getValue = useCallback<BFP['getValue']>(() => price[field], [field, price]);

	const setValue = useCallback<BFP['setValue']>(
		(value) => {
			updatePrice({ id: price.id, fieldValues: { [field]: value } });
		},
		[updatePrice, price.id, field]
	);

	return useMemo(
		() => ({
			getValue,
			setValue,
		}),
		[getValue, setValue]
	);
};

export default usePriceAmount;
