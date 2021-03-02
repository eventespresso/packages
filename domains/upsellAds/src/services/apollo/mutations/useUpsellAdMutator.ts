import { useCallback, useMemo } from 'react';

import { ExecutionResult, MutationType, useMutationWithFeedback } from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';

import type { UpdateUpsellAdInput } from './types';
import { UPDATE_UPSELL_AD } from './';
import useMutationHandler from './useMutationHandler';
import type { UpdateUpsellAdResult } from './types';

interface UpsellAdMutator {
	updateEntity: (input: UpdateUpsellAdInput) => Promise<ExecutionResult<UpdateUpsellAdResult>>;
}

const typeName = 'Upsell Ad';

const useUpsellAdMutator = (id = ''): UpsellAdMutator => {
	const toaster = useSystemNotifications();

	const updateUpsellAd = useMutationWithFeedback({
		typeName,
		mutationType: MutationType.Update,
		mutation: UPDATE_UPSELL_AD,
		toaster,
	});

	const mutationHandler = useMutationHandler();

	const updateEntity = useCallback<UpsellAdMutator['updateEntity']>(
		(input) => {
			const options = mutationHandler(MutationType.Update, { id, ...input });

			return updateUpsellAd(options);
		},
		[id, mutationHandler, updateUpsellAd]
	);

	return useMemo(() => ({ updateEntity }), [updateEntity]);
};

export default useUpsellAdMutator;
