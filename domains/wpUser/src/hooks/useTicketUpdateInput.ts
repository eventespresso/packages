import { useEffect } from 'react';

import { hooks, Filters } from '@eventespresso/edtr-services';

import { NAMESPACE } from '../constants';

const filterName: keyof Filters = 'eventEditor.ticketForm.mutationInput';

/**
 * A custom hook to update initial values of ticket edit form
 */
const useTicketUpdateInput = (): void => {
	useEffect(() => {
		// make sure to remove the previously registered hook
		hooks.removeFilter(filterName, NAMESPACE);

		hooks.addFilter(filterName, NAMESPACE, ({ capabilityRequiredType, capabilityRequired, ...input }) => {
			if (capabilityRequiredType === 'custom') {
				return {
					...input,
					capabilityRequired,
				};
			} else if (capabilityRequiredType === 'read') {
				// remove capability if 'read' is selected
				return {
					...input,
					capabilityRequired: '',
				};
			}

			return input;
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
	}, []);
};

export default useTicketUpdateInput;
