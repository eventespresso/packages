import { useCallback } from 'react';

import { MutationType } from '@eventespresso/data';
import { normalizeNumericFields, removeNullAndUndefined } from '@eventespresso/utils';

import useMutationVariables from './useMutationVariables';
import useOnCreatePrice from './useOnCreatePrice';
import useOnDeletePrice from './useOnDeletePrice';
import useOnUpdatePrice from './useOnUpdatePrice';
import type { MutationHandler, MutationUpdater } from '../types';
import { PricesList, Price } from '../../';
import { DEFAULT_PRICE_LIST_DATA as DEFAULT_LIST_DATA, usePriceQueryOptions } from '../../queries';
import type { PriceCommonInput } from './types';
import { NUMERIC_FIELDS } from './constants';

type MH = MutationHandler<Price, PriceCommonInput>;

const useMutationHandler = (): MH => {
	const options = usePriceQueryOptions();

	const onCreatePrice = useOnCreatePrice();
	const onUpdatePrice = useOnUpdatePrice();
	const onDeletePrice = useOnDeletePrice();
	const getMutationVariables = useMutationVariables();

	const onUpdate = useCallback<MutationUpdater<Price, PriceCommonInput>>(
		({ cache, entity: price, input, mutationType }) => {
			const priceTypeId = input?.priceType;
			// Read the existing data from cache.
			let data: PricesList;
			try {
				data = cache.readQuery(options);
			} catch (error) {
				data = null;
			}
			const prices = data?.espressoPrices || DEFAULT_LIST_DATA;

			switch (mutationType) {
				case MutationType.Create:
					onCreatePrice({ cache, prices, price, priceTypeId });
					break;
				case MutationType.Update:
					onUpdatePrice({ price, priceTypeId });
					break;
				case MutationType.Delete:
					onDeletePrice({ cache, prices, price, deletePermanently: input?.deletePermanently });
					break;
			}
		},
		[onCreatePrice, onDeletePrice, onUpdatePrice, options]
	);

	const mutator = useCallback<MH>(
		(mutationType, input) => {
			// Get rid of null or undefined values
			const filteredInput = removeNullAndUndefined(input);
			// normalize numeric fields
			const normalizedInput = normalizeNumericFields(NUMERIC_FIELDS, filteredInput);

			const variables = getMutationVariables(mutationType, normalizedInput);

			return { variables, onUpdate };
		},
		[getMutationVariables, onUpdate]
	);

	return mutator;
};

export default useMutationHandler;
