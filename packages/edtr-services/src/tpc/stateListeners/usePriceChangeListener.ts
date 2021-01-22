import { useEffect, useState } from 'react';
import { pick } from 'ramda';

import useTPCDataState from '../data/useTPCDataState';
import type { StateChangeListenerHook } from './types';

// the flags that change when priceType is changed
const priceBooleanFlags = ['isDiscount', 'isPercent', 'isTax'];

const usePriceChangeListener: StateChangeListenerHook = (calculatePrice) => {
	const { prices } = useTPCDataState();

	const [priceAmountsStr, setPriceAmountsStr] = useState('');
	const [booleanFlagsStr, setBooleanFlagsStr] = useState('');

	useEffect(() => {
		// To avoid triggering the change on every render
		// collect all the prices (excluding empty/zero)
		// convert to JSON to only trigger when the value changes
		const newPriceAmountsStr = JSON.stringify(prices.map((price) => price.amount).filter(Boolean));
		const newBooleanFlagsStr = JSON.stringify(prices.map((price) => pick(priceBooleanFlags, price)));

		if (newPriceAmountsStr === priceAmountsStr && newBooleanFlagsStr === booleanFlagsStr) {
			return;
		}
		calculatePrice();

		setPriceAmountsStr(newPriceAmountsStr);
		setBooleanFlagsStr(newBooleanFlagsStr);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [prices]);
};

export default usePriceChangeListener;
