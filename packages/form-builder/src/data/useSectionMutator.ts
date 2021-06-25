import { useCallback, useMemo } from 'react';

import {
	MutationFunction,
	MutationInput,
	MutationType,
	OperationVariables,
	useMutationWithFeedback,
} from '@eventespresso/data';
import { useSystemNotifications } from '@eventespresso/toaster';

import type {
	CreateFormSectionInput,
	CreateFormSectionResult,
	DeleteFormSectionInput,
	DeleteFormSectionResult,
	UpdateFormSectionInput,
	UpdateFormSectionResult,
} from './types';
import { CREATE_FORM_SECTION, DELETE_FORM_SECTION, UPDATE_FORM_SECTION } from './gql';
import { omitLocalFields } from '../state/utils';

interface SectionMutator {
	createEntity: MutationFunction<CreateFormSectionResult, CreateFormSectionInput>;
	updateEntity: MutationFunction<UpdateFormSectionResult, UpdateFormSectionInput>;
	deleteEntity: MutationFunction<DeleteFormSectionResult, DeleteFormSectionInput>;
}

const createVariables = (mutationType: MutationType, input: MutationInput): OperationVariables => {
	const mutationInput: MutationInput = {
		clientMutationId: `${mutationType}_SECTION`,
		...omitLocalFields(input),
	};

	return {
		input: mutationInput,
	};
};

export const useSectionMutator = (id = ''): SectionMutator => {
	const toaster = useSystemNotifications();

	const createSection = useMutationWithFeedback({
		typeName: 'Section',
		mutationType: MutationType.Create,
		mutation: CREATE_FORM_SECTION,
		toaster,
	});

	const updateSection = useMutationWithFeedback({
		typeName: 'Section',
		mutationType: MutationType.Update,
		mutation: UPDATE_FORM_SECTION,
		toaster,
	});

	const deleteSection = useMutationWithFeedback({
		typeName: 'Section',
		mutationType: MutationType.Delete,
		mutation: DELETE_FORM_SECTION,
		toaster,
	});

	const createEntity = useCallback<SectionMutator['createEntity']>(
		async (input) => {
			const variables = createVariables(MutationType.Create, { id, ...input });
			return createSection({ variables });
		},
		[id, createSection]
	);

	const updateEntity = useCallback<SectionMutator['updateEntity']>(
		async (input) => {
			const variables = createVariables(MutationType.Update, { id, ...input });
			return updateSection({ variables });
		},
		[id, updateSection]
	);

	const deleteEntity = useCallback<SectionMutator['deleteEntity']>(
		async (input) => {
			const variables = createVariables(MutationType.Delete, { id, ...input });
			return deleteSection({ variables });
		},
		[id, deleteSection]
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
