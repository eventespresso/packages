import { useContext } from 'react';
import invariant from 'invariant';

import { BulkEdit, BulkEditContext } from './BulkEditProvider';

export const useBulkEdit = (): BulkEdit => {
	const value = useContext(BulkEditContext);

	invariant(value, 'useBulkEdit must be used inside <BulkEditProvider> component');

	return value;
};
