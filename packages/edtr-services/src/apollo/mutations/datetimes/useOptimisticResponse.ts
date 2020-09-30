import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MutationType, MutationInput } from '@eventespresso/data';
import { PLUS_ONE_MONTH, PLUS_TWO_MONTHS } from '@eventespresso/constants';
import { ucFirst, removeNullAndUndefined } from '@eventespresso/utils';
import { findEntityByGuid } from '@eventespresso/predicates';
import type { Datetime } from '../../types';
import { useDatetimes } from '../../queries';

export const DATETIME_DEFAULTS: Datetime = {
	id: '',
	dbId: 0,
	cacheId: uuidv4(),
	capacity: -1,
	description: '',
	endDate: PLUS_TWO_MONTHS.toISOString(),
	isActive: false,
	isExpired: false,
	isPrimary: false,
	isSoldOut: false,
	isTrashed: false,
	isUpcoming: false,
	length: 0,
	name: '',
	order: 0,
	reserved: 0,
	sold: 0,
	startDate: PLUS_ONE_MONTH.toISOString(),
	status: null,
};

type OptimisticResCb = (mutationType: MutationType, input: MutationInput) => any;

const useOptimisticResponse = (): OptimisticResCb => {
	const datetimes = useDatetimes();

	return useCallback<OptimisticResCb>(
		(mutationType, input) => {
			let espressoDatetime: Partial<Datetime> = {
				__typename: 'EspressoDatetime',
			};
			// Get rid of null or undefined values
			const filteredInput = removeNullAndUndefined(input);

			const datetime = findEntityByGuid(datetimes)(input.id);

			switch (mutationType) {
				case MutationType.Create:
					espressoDatetime = {
						...espressoDatetime,
						...DATETIME_DEFAULTS,
						...filteredInput,
					};
					break;
				case MutationType.Delete:
					espressoDatetime = {
						...espressoDatetime,
						...DATETIME_DEFAULTS, // to avoid pollution of test console
						...datetime,
						...filteredInput,
						isTrashed: true,
						cacheId: uuidv4(),
					};
					break;
				case MutationType.Update:
					espressoDatetime = {
						...espressoDatetime,
						...datetime,
						...filteredInput,
						cacheId: uuidv4(),
					};
					break;
			}

			const lcMutationtype = mutationType.toLowerCase();
			const ucFirstMutationtype = ucFirst(lcMutationtype);

			// e.g. "deleteEspressoDatetime", "createEspressoDatetime"
			const mutation = `${lcMutationtype}EspressoDatetime`;

			return {
				__typename: 'RootMutation',
				[mutation]: {
					__typename: `${ucFirstMutationtype}EspressoDatetimePayload`,
					espressoDatetime,
				},
			};
		},
		[datetimes]
	);
};

export default useOptimisticResponse;
