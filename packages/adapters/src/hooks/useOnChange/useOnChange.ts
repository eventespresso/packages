import { useCallback } from 'react';

import type { UseOnChange, UseOnChangeCallback } from './types';

export const useOnChange = ({ onChange, onChangeValue }: UseOnChange): UseOnChangeCallback => {
	return useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (typeof onChangeValue === 'function') {
				onChangeValue(event.target.value, event);
			}

			if (typeof onChange === 'function') {
				onChange(event);
			}
		},
		[onChange, onChangeValue]
	);
};
