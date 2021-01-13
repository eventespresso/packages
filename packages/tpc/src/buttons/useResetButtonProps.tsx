import { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { useTPCDataState } from '@eventespresso/edtr-services';
import type { ButtonProps } from '@eventespresso/ui-components';

const useResetButtonProps = (): ButtonProps => {
	const { reset } = useTPCDataState();

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
