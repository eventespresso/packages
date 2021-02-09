import { useEffect, useState } from 'react';
import { pick } from 'ramda';

import { useDataState } from '../data';
import { StateChangeListenerHook } from './types';

// the flags that change when priceType is changed
const priceFields = ['isDiscount', 'isPercent', 'isTax', 'order'];

const usePriceChangeListener: StateChangeListenerHook = (calculatePrice) => {
	const { prices } = useDataState();

	const [priceAmountsStr, setPriceAmountsStr] = useState('');
	const [priceFieldsStr, setPriceFieldsStr] = useState('');

	useEffect(() => {
		// To avoid triggering the change on every render
		// collect all the prices (excluding empty/zero)
		// convert to JSON to only trigger when the value changes
		const newPriceAmountsStr = JSON.stringify(prices.map((price) => price.amount).filter(Boolean));
		const newPriceFieldsStr = JSON.stringify(prices.map((price) => pick(priceFields, price)));

		if (newPriceAmountsStr === priceAmountsStr && newPriceFieldsStr === priceFieldsStr) {
			return;
		}
		calculatePrice();

		setPriceAmountsStr(newPriceAmountsStr);
		setPriceFieldsStr(newPriceFieldsStr);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [prices]);
};

export default usePriceChangeListener;
