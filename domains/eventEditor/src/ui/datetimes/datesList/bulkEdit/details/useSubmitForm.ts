import { useCallback } from 'react';

import { useBulkEdit } from '@eventespresso/services';
import { useDatetimes, useBulkEditDatetimes, formToBulkUpdateInput } from '@eventespresso/edtr-services';

import type { BulkEditFormShape } from './types';

type Callback = (values: BulkEditFormShape) => void;

const useSubmitForm = (onClose: VoidFunction): Callback => {
	const { getSelected, unSelectAll } = useBulkEdit();
	const allDates = useDatetimes();
	const { updateEntities } = useBulkEditDatetimes();
	return useCallback<Callback>(
		(formData) => {
			// pull the shutter down
			onClose();
			// back to basics
			unSelectAll();
			// prepare mutaion input from data
			const input = formToBulkUpdateInput(formData, allDates, getSelected());
			// do the thing
			updateEntities(input);
		},
		[allDates, getSelected, onClose, unSelectAll, updateEntities]
	);
};

export default useSubmitForm;
