import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';
import { hooks, Actions, Filters } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import { NAMESPACE } from '../constants';
import { RemGlobalModals } from '../types';

const filterName: keyof Filters = 'eventEditor.datetimes.bulkEdit.actions';
const actionName: keyof Actions = 'eventEditor.datetimes.bulkEdit.apply';

/**
 * A custom hook to to handle bulk add tickets to dates
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

	const { openWithData } = useGlobalModal(RemGlobalModals.BULK_ADD_TICKETS);
	useEffect(() => {
		hooks.addAction(actionName, NAMESPACE, (action, bulkEdit) => {
			if (action !== 'bulk-add-tickets') {
				return;
			}
			const entityIds = bulkEdit.getSelected();
			openWithData({ entityIds });
		});

		// housekeeping
		return () => hooks.removeAction(actionName, NAMESPACE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useDatesBulkEditActions;
