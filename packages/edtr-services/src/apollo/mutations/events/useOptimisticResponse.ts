import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MutationType, MutationInput } from '@eventespresso/data';
import { ucFirst, removeNullAndUndefined } from '@eventespresso/utils';

import type { Event } from '../../types';
import { useEvent } from '../../queries';

export const EVENT_DEFAULTS: Event = {
	id: '',
	dbId: 0,
	cacheId: uuidv4(),
	additionalLimit: 0,
	allowOverflow: false,
	created: '',
	description: '',
	displayDescription: false,
	displayTicketSelector: true,
	donations: false,
	externalUrl: '',
	isActive: true,
	isCancelled: false,
	isExpired: false,
	isInactive: false,
	isPostponed: false,
	isSoldOut: false,
	isUpcoming: false,
	memberOnly: false,
	name: '',
	order: 0,
	phone: '',
	shortDescription: '',
	status: '',
	timezoneString: '',
	visibleOn: '',
};

type OptimisticResCb = (mutationType: MutationType, input: MutationInput) => any;

const useOptimisticResponse = (): OptimisticResCb => {
	const event = useEvent();

	return useCallback<OptimisticResCb>(
		(mutationType, input) => {
			let espressoEvent: Partial<Event> = {
				__typename: 'EspressoEvent',
			};
			// Get rid of null or undefined values
			const filteredInput = removeNullAndUndefined(input);

			switch (mutationType) {
				case MutationType.Update:
					espressoEvent = {
						...espressoEvent,
						...event,
						...filteredInput,
						cacheId: uuidv4(),
					};
					break;
			}

			const lcMutationtype = mutationType.toLowerCase();
			const ucFirstMutationtype = ucFirst(lcMutationtype);

			// e.g. "updateEspressoEvent"
			const mutation = `${lcMutationtype}EspressoEvent`;

			return {
				__typename: 'RootMutation',
				[mutation]: {
					__typename: `${ucFirstMutationtype}EspressoEventPayload`,
					espressoEvent,
				},
			};
		},
		[event]
	);
};

export default useOptimisticResponse;
