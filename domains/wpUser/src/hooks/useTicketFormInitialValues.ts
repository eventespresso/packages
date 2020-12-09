import { useEffect } from 'react';

import { hooks, useTicketsMeta, Filters } from '@eventespresso/edtr-services';

import { NAMESPACE } from '../constants';

const filterName: keyof Filters = 'eventEditor.ticketForm.initalValues';

/**
 * A custom hook to update initial values of ticket edit form
 */
const useTicketFormInitialValues = (): void => {
	const { getMetaValue } = useTicketsMeta();

	useEffect(() => {
		// make sure to remove the previously registered hook
		hooks.removeFilter(filterName, NAMESPACE);

		hooks.addFilter('eventEditor.ticketForm.initalValues', NAMESPACE, (initialValues, ticket) => {
			// ticket the value from meta. It will be empty for new tickets
			const capabilityRequired = getMetaValue<string>(ticket?.id, 'capabilityRequired', '');

			// if capabilityRequired has a value, it means, cusom option should be selected
			const capabilityRequiredType = capabilityRequired ? 'custom' : 'read';

			return {
				...initialValues,
				capabilityRequiredType,
				capabilityRequired,
			};
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
	}, [getMetaValue]);
};

export default useTicketFormInitialValues;
