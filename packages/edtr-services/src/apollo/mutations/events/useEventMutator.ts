import { useCallback, useMemo } from 'react';

import type { UpdateEventInput } from './types';
import { MutationType, useMutationWithFeedback } from '@eventespresso/data';
import { UPDATE_EVENT } from './';
import useMutationHandler from './useMutationHandler';
import { MutationFunction, TypeName } from '../types';
import type { UpdateEventResult } from './types';
import { useSystemNotifications } from '@eventespresso/toaster';

interface EventMutator {
	updateEntity: MutationFunction<UpdateEventResult, UpdateEventInput>;
}

type EM = EventMutator;

const useEventMutator = (id = ''): EM => {
	const toaster = useSystemNotifications();

	const updateEvent = useMutationWithFeedback({
		typeName: TypeName.Event,
		mutationType: MutationType.Update,
		mutation: UPDATE_EVENT,
		toaster,
	});

	const mutationHandler = useMutationHandler();

	const updateEntity = useCallback<EM['updateEntity']>(
		(input) => {
			const options = mutationHandler(MutationType.Update, { id, ...input });

			return updateEvent(options);
		},
		[id, mutationHandler, updateEvent]
	);

	return useMemo(() => ({ updateEntity }), [updateEntity]);
};

export default useEventMutator;
