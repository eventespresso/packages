import { useCallback } from 'react';

import type { UseOnChange, UseOnChangeCallback } from './types';

export const useOnChange = ({ onChange, onChangeValue }: UseOnChange): UseOnChangeCallback => {
	return useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChangeValue?.(event.target.value, event);

			onChange?.(event);
		},
		[onChange, onChangeValue]
	);
};
