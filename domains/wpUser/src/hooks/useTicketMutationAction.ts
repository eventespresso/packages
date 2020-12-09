import { useEffect } from 'react';

import { hooks, useTicketsMeta, Actions } from '@eventespresso/edtr-services';
import { hasTempId } from '@eventespresso/predicates';
import { MutationType } from '@eventespresso/data';

import { NAMESPACE } from '../constants';

const actionName: keyof Actions = 'eventEditor.ticket.mutation';

/**
 * A custom hook to update ticket capability meta on ticket mutation
 */
const useTicketMutationAction = (): void => {
	const { setMetaValue } = useTicketsMeta();

	useEffect(() => {
		hooks.addAction(actionName, NAMESPACE, (mutationType, input, ticket) => {
			switch (mutationType) {
				case MutationType.Create:
				case MutationType.Update:
					// it's possible that the entity is updated partially
					// thus capabilityRequired may be undefined
					if (typeof input?.capabilityRequired === 'string' && !hasTempId(ticket)) {
						setMetaValue(ticket?.id, 'capabilityRequired', input.capabilityRequired);
					}

					break;
			}
		});

		// housekeeping
		return () => hooks.removeAction(actionName, NAMESPACE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useTicketMutationAction;
