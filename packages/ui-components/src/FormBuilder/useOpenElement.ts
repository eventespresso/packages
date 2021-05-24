import { useCallback, useState } from 'react';
import type { openCloseElement } from './types';

/**
 * controls and tracks which element is open for editing
 */
export const useOpenElement = (): openCloseElement => {
	const [openElement, setOpenElement] = useState('');
	const isOpen = (UUID: string) => UUID === openElement;
	// onClick handler that must be primed (curried) with the form element's UUID
	const toggleElement = useCallback((UUID: string) => () => setOpenElement(UUID), [setOpenElement]);
	return { isOpen, toggleElement };
};
