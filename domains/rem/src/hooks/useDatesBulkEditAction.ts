import { useEffect } from 'react';

import { hooks, Actions } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';

import { NAMESPACE } from '../constants';
import { RemGlobalModals } from '../types';

const actionName: keyof Actions = 'eventEditor.datetimes.bulkEdit.apply';

/**
 * A custom hook to update ticket capability meta on ticket mutation
 */
const useDatesBulkEditAction = (): void => {
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

export default useDatesBulkEditAction;
