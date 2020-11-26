import { useCallback } from 'react';

import { useBulkEdit } from '@eventespresso/services';
import { useBulkDeleteTickets } from '@eventespresso/edtr-services';

import type { OnDeleteProps } from './types';

type OnDelete = (props: OnDeleteProps) => VoidFunction;

const useOnDelete: OnDelete = ({ areTrashedTickets, onClose }) => {
	const { getSelected, unSelectAll } = useBulkEdit();
	const bulkDelete = useBulkDeleteTickets();
	return useCallback<VoidFunction>(() => {
		// pull the shutter down
		onClose();
		// back to basics
		unSelectAll();

		// goodbye folks :wave:
		bulkDelete({ entityIds: getSelected(), deletePermanently: areTrashedTickets });
	}, [areTrashedTickets, bulkDelete, getSelected, onClose, unSelectAll]);
};

export default useOnDelete;
