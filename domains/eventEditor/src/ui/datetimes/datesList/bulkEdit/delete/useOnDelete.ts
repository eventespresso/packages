import { useCallback } from 'react';

import { useBulkEdit } from '@eventespresso/services';
import { useBulkDeleteDatetimes } from '@eventespresso/edtr-services';

import type { OnDeleteProps } from './types';

type OnDelete = (props: OnDeleteProps) => VoidFunction;

const useOnDelete: OnDelete = ({ areTrashedDates, onClose }) => {
	const { getSelected, unSelectAll } = useBulkEdit();
	const bulkDelete = useBulkDeleteDatetimes();
	return useCallback<VoidFunction>(() => {
		// pull the shutter down
		onClose();
		// back to basics
		unSelectAll();

		// goodbye folks :wave:
		bulkDelete(getSelected(), areTrashedDates);
	}, [areTrashedDates, bulkDelete, getSelected, onClose, unSelectAll]);
};

export default useOnDelete;
