import { useCallback, useMemo } from 'react';

import type { CreateRecurrenceInput, UpdateRecurrenceInput, DeleteRecurrenceInput } from './types';
import { MutationType, MutationFunction, useMutationWithFeedback } from '@eventespresso/data';
import { CREATE_RECURRENCE, UPDATE_RECURRENCE, DELETE_RECURRENCE } from './';
import useMutationHandler from './useMutationHandler';
import { useUpdateCallback, TypeName as EdtrTypeName } from '@eventespresso/edtr-services';
import { TypeName } from '../types';
import type { CreateRecurrenceResult, UpdateRecurrenceResult, DeleteRecurrenceResult } from './types';
import { useSystemNotifications } from '@eventespresso/toaster';

interface RecurrenceMutator {
	createEntity: MutationFunction<CreateRecurrenceResult, CreateRecurrenceInput>;
	updateEntity: MutationFunction<UpdateRecurrenceResult, UpdateRecurrenceInput>;
	deleteEntity: MutationFunction<DeleteRecurrenceResult, DeleteRecurrenceInput>;
}

type RM = RecurrenceMutator;

const useRecurrenceMutator = (id = ''): RM => {
	// create a single toaster instance to share between all mutations
	const toaster = useSystemNotifications();

	const createRecurrence = useMutationWithFeedback({
		typeName: TypeName.Recurrence,
		mutationType: MutationType.Create,
		mutation: CREATE_RECURRENCE,
		toaster,
	});

	const updateRecurrence = useMutationWithFeedback({
		typeName: TypeName.Recurrence,
		mutationType: MutationType.Update,
		mutation: UPDATE_RECURRENCE,
		toaster,
	});

	const deleteRecurrence = useMutationWithFeedback({
		typeName: TypeName.Recurrence,
		mutationType: MutationType.Delete,
		mutation: DELETE_RECURRENCE,
		toaster,
	});

	const mutationHandler = useMutationHandler();

	const getUpdateCallback = useUpdateCallback(TypeName.Recurrence as unknown as EdtrTypeName);

	const createEntity = useCallback<RM['createEntity']>(
		(input) => {
			const { onUpdate, ...options } = mutationHandler(MutationType.Create, input);

			const update = getUpdateCallback({ onUpdate, mutationType: MutationType.Create, input });

			return createRecurrence({ ...options, update });
		},
		[createRecurrence, getUpdateCallback, mutationHandler]
	);

	const updateEntity = useCallback<RM['updateEntity']>(
		(input) => {
			const { onUpdate, ...options } = mutationHandler(MutationType.Update, { id, ...input });

			const update = getUpdateCallback({ onUpdate, mutationType: MutationType.Update, input });

			return updateRecurrence({ ...options, update });
		},
		[getUpdateCallback, id, mutationHandler, updateRecurrence]
	);

	const deleteEntity = useCallback<RM['deleteEntity']>(
		(input) => {
			const { onUpdate, ...options } = mutationHandler(MutationType.Delete, { id, ...input });

			const update = getUpdateCallback({ onUpdate, mutationType: MutationType.Delete, input });

			return deleteRecurrence({ ...options, update });
		},
		[deleteRecurrence, getUpdateCallback, id, mutationHandler]
	);

	return useMemo(() => ({ createEntity, updateEntity, deleteEntity }), [createEntity, deleteEntity, updateEntity]);
};

export default useRecurrenceMutator;
