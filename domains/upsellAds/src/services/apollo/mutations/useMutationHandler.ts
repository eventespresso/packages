import { useCallback } from 'react';
import { pick } from 'ramda';

import { MutationFunctionOptions, MutationType } from '@eventespresso/data';

import useMutationVariables from './useMutationVariables';
import type { UpsellAdCommonInput } from './types';
import { UPSELL_AD_INPUT_FIELDS } from './constants';

type MutationHandler = (mutationType: MutationType, input: UpsellAdCommonInput) => MutationFunctionOptions;

const useMutationHandler = (): MutationHandler => {
	const getMutationVariables = useMutationVariables();

	const mutationHandler = useCallback<MutationHandler>(
		(mutationType, input) => {
			const normalizedInput: UpsellAdCommonInput = pick(UPSELL_AD_INPUT_FIELDS, input);

			if (mutationType === MutationType.Update) {
				normalizedInput.id = input.id;
			}

			const variables = getMutationVariables(mutationType, normalizedInput);

			return { variables };
		},
		[getMutationVariables]
	);

	return mutationHandler;
};

export default useMutationHandler;
