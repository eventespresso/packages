import { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import type { ButtonProps } from '@eventespresso/adapters';
import { useDataState } from '../data';

const useResetButtonProps = (): ButtonProps => {
	const { reset } = useDataState();

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Reset'),
			onClick: reset,
			type: 'reset',
		}),
		[reset]
	);
};

export default useResetButtonProps;
