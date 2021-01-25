import { useEffect } from 'react';

export const useOnClickOutside = (ref: HTMLElement, onClickOutside: VoidFunction) => {
	useEffect(() => {
		const handleClickOutside = (event: KeyboardEvent) => {
			if (ref && !ref.contains(event.target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClickOutside, ref]);
};
