import { gql } from '@eventespresso/data';

import { EVENT_ATTRIBUTES } from '../../queries/events';

export const UPDATE_EVENT = gql`
	mutation UPDATE_EVENT($input: UpdateEspressoEventInput!) {
		updateEspressoEvent(input: $input) {
			espressoEvent {
				...eventAttributes
			}
		}
	}
	${EVENT_ATTRIBUTES}
`;

export { default as useEventMutator } from './useEventMutator';

export * from './types';
