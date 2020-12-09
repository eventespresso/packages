import { useEffect } from 'react';

import { hooks, useTicketsMeta, Actions } from '@eventespresso/edtr-services';
import { MutationType } from '@eventespresso/data';

import { NAMESPACE } from '../constants';

const actionName: keyof Actions = 'eventEditor.ticket.mutation';

/**
 * A custom hook to update ticket capability meta on ticket mutation
 */
const useTicketMutationAction = (): void => {
	const { setMetaValue } = useTicketsMeta();

	useEffect(() => {
		// avoid infinite loop
		if (!hooks.doingAction('eventEditor.ticket.mutation')) {
			// make sure to remove the previously registered hook
			hooks.removeAction(actionName, NAMESPACE);
			hooks.addAction('eventEditor.ticket.mutation', NAMESPACE, (mutationType, input, ticket) => {
				switch (mutationType) {
					case MutationType.Create:
					case MutationType.Update:
						// it's possible that the entity is updated partially
						// thus capabilityRequired may be undefined
						if (typeof input?.capabilityRequired === 'string') {
							setMetaValue(ticket?.id, 'capabilityRequired', input.capabilityRequired);
						}
						break;
				}
			});
		}

		// housekeeping
		return () => hooks.removeAction(actionName, NAMESPACE);
	}, [setMetaValue]);
};

export default useTicketMutationAction;
