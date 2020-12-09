import { useEffect } from 'react';
import { pluck } from 'ramda';

import { hooks, useTicketsMeta, Filters } from '@eventespresso/edtr-services';

import { NAMESPACE } from '../constants';
import { capabilityOptions } from './capabilityOptions';

const filterName: keyof Filters = 'eventEditor.ticketForm.initalValues';

// Convert select options to a flat array of option values
const optionValues = capabilityOptions
	.map(({ options, value }) => (options ? pluck('value', options) : [value]))
	.flat()
	.filter(Boolean);

/**
 * A custom hook to update initial values of ticket edit form
 */
const useTicketFormInitialValues = (): void => {
	const { getMetaValue } = useTicketsMeta();

	useEffect(() => {
		// make sure to remove the previously registered hook
		hooks.removeFilter(filterName, NAMESPACE);

		hooks.addFilter(filterName, NAMESPACE, (initialValues, ticket) => {
			// ticket the value from meta. It will be empty for new tickets
			let capabilityRequired = getMetaValue<string>(ticket?.id, 'capabilityRequired', 'read');
			let customCapabilityRequired = '';

			// if capabilityRequired has some unknown value
			// it means, custom option should be selected
			if (!optionValues.includes(capabilityRequired)) {
				customCapabilityRequired = `${capabilityRequired}`;
				capabilityRequired = 'custom';
			}

			return {
				...initialValues,
				capabilityRequired,
				customCapabilityRequired,
			};
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
	}, [getMetaValue]);
};

export default useTicketFormInitialValues;
