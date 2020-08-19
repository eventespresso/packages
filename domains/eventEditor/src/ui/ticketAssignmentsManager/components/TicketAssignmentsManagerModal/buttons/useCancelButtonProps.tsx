import { useCallback, useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import type { ButtonProps } from '@eventespresso/adapters';
import { useDataState } from '../../../data';

const useCancelButtonProps = (onCloseModal: VoidFunction): ButtonProps => {
	const { hasOrphanEntities } = useDataState();

	const hasErrors = hasOrphanEntities();

	const onClick: ButtonProps['onClick'] = useCallback(() => {
		onCloseModal();
	}, [onCloseModal]);

	console.log('useCancelButtonProps here');

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Cancel'),
			isDisabled: hasErrors,
			onClick,
			type: 'reset',
		}),
		[hasErrors, onClick]
	);
};

export default useCancelButtonProps;
