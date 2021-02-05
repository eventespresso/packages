import { useCallback, useRef } from 'react';
import { MutationTuple, OperationVariables, useMutation } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { v4 as uuidv4 } from 'uuid';

import type { MutationType } from './types';
import type { SystemNotificationsToaster } from '@eventespresso/toaster';

interface MutationWithFeedbackArgs {
	typeName: string; // e.g. "Datetime", "Ticket", "PriceType"
	mutation: DocumentNode;
	mutationType: MutationType;
	toaster: SystemNotificationsToaster;
}

type MutationWithFeedback = <TData = any, TVariables = OperationVariables>(
	args: MutationWithFeedbackArgs
) => MutationTuple<TData, TVariables>['0'];

const useMutationWithFeedback: MutationWithFeedback = ({ typeName, mutation, mutationType, toaster }) => {
	// generate a toaster key that sustains re-renders
	const toasterKey = useRef(uuidv4());

	const key = toasterKey.current;

	/**
	 * Get the toaster message based upon typeName and mutationType
	 */
	const getToasterMessage = useCallback(
		(suffix: 'ing' | 'ed' = 'ing') => {
			// For example "CREATE" will become "creating" or "created"
			const verb = mutationType.toLowerCase().replace(/e$/, suffix);
			// e.g. "updating datetime"
			return `${verb} ${typeName.toLowerCase()}`;
		},
		[mutationType, typeName]
	);

	/**
	 * Displays a success toaster on complete
	 */
	const onCompleted = useCallback<VoidFunction>(() => {
		const successMessage = `successfully ${getToasterMessage('ed')}`;
		toaster.update({ key, message: successMessage, type: 'success' });
	}, [getToasterMessage, key, toaster]);

	/**
	 * Displays an error toaster on error
	 */
	const onError = useCallback(() => {
		const errorMessage = `error ${getToasterMessage()}`;
		toaster.dismiss(key);
		toaster.error({ message: errorMessage });
	}, [getToasterMessage, key, toaster]);

	/**
	 * Displays a loading indicator when the mutation starts
	 */
	const onMutationStart = useCallback<VoidFunction>(() => {
		const message = getToasterMessage();
		toaster.loading({ autoClose: false, key, message });
	}, [getToasterMessage, key, toaster]);

	/**
	 * Fire it all up
	 */
	const [mutate] = useMutation(mutation, {
		onCompleted,
		onError,
	});

	/**
	 * Just insert the loading indicator call into mutation function
	 */
	const doMutation = useCallback<typeof mutate>(
		(...args) => {
			onMutationStart();
			return mutate(...args);
		},
		[mutate, onMutationStart]
	);

	return doMutation;
};

export default useMutationWithFeedback;
