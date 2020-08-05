import { useCallback } from 'react';

import type { BulkEditFormShape } from './types';

type Callback = (values: BulkEditFormShape) => void;

const useSubmitForm = (onClose: VoidFunction): Callback => {
	return useCallback<Callback>(
		(values) => {
			console.log(values);
			onClose();
		},
		[onClose]
	);
};

export default useSubmitForm;
