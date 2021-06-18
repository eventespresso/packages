import { useCallback, useMemo } from 'react';

import {
	MutationFunction,
	MutationInput,
	MutationType,
	OperationVariables,
	useMutationWithFeedback,
} from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';
import { wait } from '@eventespresso/utils';

import type {
	CreateFormElementInput,
	CreateFormElementResult,
	DeleteFormElementInput,
	DeleteFormElementResult,
	UpdateFormElementInput,
	UpdateFormElementResult,
} from './types';
import { CREATE_FORM_ELEMENT, DELETE_FORM_ELEMENT, UPDATE_FORM_ELEMENT } from './gql';
import { omitLocalFields } from '../state/utils';

interface ElementMutator {
	createEntity: MutationFunction<CreateFormElementResult, CreateFormElementInput>;
	updateEntity: MutationFunction<UpdateFormElementResult, UpdateFormElementInput>;
	deleteEntity: MutationFunction<DeleteFormElementResult, DeleteFormElementInput>;
}

const createVariables = (mutationType: MutationType, input: MutationInput): OperationVariables => {
	const mutationInput: MutationInput = {
		clientMutationId: `${mutationType}_ELEMENT`,
		...omitLocalFields(input),
	};

	return {
		input: mutationInput,
	};
};

export const useElementMutator = (id = ''): ElementMutator => {
	const toaster = useSystemNotifications();

	const createElement = useMutationWithFeedback({
		typeName: 'Element',
		mutationType: MutationType.Create,
		mutation: CREATE_FORM_ELEMENT,
		toaster,
	});

	const updateElement = useMutationWithFeedback({
		typeName: 'Element',
		mutationType: MutationType.Update,
		mutation: UPDATE_FORM_ELEMENT,
		toaster,
	});

	const deleteElement = useMutationWithFeedback({
		typeName: 'Element',
		mutationType: MutationType.Delete,
		mutation: DELETE_FORM_ELEMENT,
		toaster,
	});

	const createEntity = useCallback<ElementMutator['createEntity']>(
		async (input) => {
			// emulate network request
			console.log('creating element...', input);
			return await wait(1500);

			// eslint-disable-next-line no-unreachable
			const variables = createVariables(MutationType.Create, { id, ...input });
			return createElement({ variables });
		},
		[id, createElement]
	);

	const updateEntity = useCallback<ElementMutator['updateEntity']>(
		async (input) => {
			// emulate network request
			console.log('updating element...', input);
			return await wait(1500);

			// eslint-disable-next-line no-unreachable
			const variables = createVariables(MutationType.Update, { id, ...input });
			return updateElement({ variables });
		},
		[id, updateElement]
	);

	const deleteEntity = useCallback<ElementMutator['deleteEntity']>(
		async (input) => {
			// emulate network request
			console.log('deleting element...', input);
			return await wait(1000);

			// eslint-disable-next-line no-unreachable
			const variables = createVariables(MutationType.Delete, { id, ...input });
			return deleteElement({ variables });
		},
		[id, deleteElement]
	);

	return useMemo(
		() => ({
			createEntity,
			updateEntity,
			deleteEntity,
		}),
		[createEntity, deleteEntity, updateEntity]
	);
};
