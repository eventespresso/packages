import { useCallback, useMemo, useState } from 'react';
import type { OpenCloseElement as OCE } from './types';

/**
 * controls and tracks which element is open for editing
 */
export const useOpenElement = (): OCE => {
	const [openElement, setOpenElement] = useState('');

	const isOpen = useCallback<OCE['isOpen']>((UUID) => UUID === openElement, [openElement]);

	// onClick handler that must be primed (curried) with the form element's UUID
	const toggleElement = useCallback<OCE['toggleElement']>(
		(UUID: string) => () => {
			// if passed UUID matches the currently open element, then close that element (by unsetting UUID)
			const activeElement = UUID !== openElement ? UUID : '';
			setOpenElement(activeElement);
		},
		[openElement, setOpenElement]
	);

	return useMemo(() => ({ isOpen, toggleElement }), [isOpen, toggleElement]);
};
