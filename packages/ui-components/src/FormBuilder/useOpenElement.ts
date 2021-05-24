import { useCallback, useState } from 'react';
import type { openCloseElement } from './types';

/**
 * controls and tracks which element is open for editing
 */
export const useOpenElement = (): openCloseElement => {
	const [openElement, setOpenElement] = useState('');
	const isOpen = (UUID: string) => UUID === openElement;
	// onClick handler that must be primed (curried) with the form element's UUID
	const toggleElement = useCallback(
		(UUID: string) => () => {
			// if passed UUID matches the currently open element, then close that element (by unsetting UUID)
			const activeElement = UUID !== openElement ? UUID : '';
			setOpenElement(activeElement);
		},
		[openElement, setOpenElement]
	);
	return { isOpen, toggleElement };
};
