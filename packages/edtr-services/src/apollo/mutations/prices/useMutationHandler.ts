import { useCallback } from 'react';
import { OperationVariables } from 'apollo-client';

import useOnCreatePrice from './useOnCreatePrice';
import useOnDeletePrice from './useOnDeletePrice';
import useOnUpdatePrice from './useOnUpdatePrice';
import type { MutationHandler, MutationUpdater } from '../types';
import { MutationType, MutationInput } from '@eventespresso/data';
import { PricesList, Price } from '../../';
import { DEFAULT_PRICE_LIST_DATA as DEFAULT_LIST_DATA, usePriceQueryOptions } from '../../queries';
import type { PriceCommonInput } from './types';

type MH = MutationHandler<Price, PriceCommonInput>;

const useMutationHandler = (): MH => {
	const options = usePriceQueryOptions();

	const onCreatePrice = useOnCreatePrice();
	const onUpdatePrice = useOnUpdatePrice();
	const onDeletePrice = useOnDeletePrice();

	const createVariables = useCallback((mutationType: MutationType, input: MutationInput): OperationVariables => {
		const mutationInput: MutationInput = {
			clientMutationId: `${mutationType}_PRICE`,
			...input,
		};

		return {
			input: mutationInput,
		};
	}, []);

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
			const variables = createVariables(mutationType, input);

			return { variables, onUpdate };
		},
		[createVariables, onUpdate]
	);

	return mutator;
};

export default useMutationHandler;
