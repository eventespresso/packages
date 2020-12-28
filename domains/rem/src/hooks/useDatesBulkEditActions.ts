import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';
import { hooks, Filters } from '@eventespresso/edtr-services';

import { NAMESPACE } from '../constants';

const filterName: keyof Filters = 'eventEditor.datetimes.bulkEdit.actions';

/**
 * A custom hook to to add WP User section to Ticket edit form
 */
const useDatesBulkEditActions = (): void => {
	useEffect(() => {
		hooks.addFilter(filterName, NAMESPACE, (actions) => {
			return [
				...actions,
				{
					value: 'bulk-add-tickets',
					label: __('add tickets'),
				},
			] as typeof actions;
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
	}, []);
};

export default useDatesBulkEditActions;
