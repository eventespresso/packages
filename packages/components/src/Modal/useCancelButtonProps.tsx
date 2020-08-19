import { useCallback, useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import type { ButtonProps } from '@eventespresso/adapters';

const useCancelButtonProps = (onCloseModal: VoidFunction): ButtonProps => {
	const onClick: ButtonProps['onClick'] = useCallback(() => {
		onCloseModal();
	}, [onCloseModal]);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Cancel'),
			onClick,
			type: 'reset',
		}),
		[onClick]
	);
};

export default useCancelButtonProps;
