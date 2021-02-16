import { useCallback } from 'react';

import type { UseOnChange, UseOnChangeCallback } from './types';

export const useOnChange = ({ isDisabled, onChange, onChangeValue }: UseOnChange): UseOnChangeCallback => {
	return useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (!isDisabled) {
				onChangeValue?.(event.target.value, event);

				onChange?.(event);
			}
		},
		[isDisabled, onChange, onChangeValue]
	);
};
