import { useCallback, useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { useDataState } from '../../../data';
import type { ButtonProps } from '@eventespresso/ui-components';

const useCancelButtonProps = (onCloseModal: VoidFunction): ButtonProps => {
	const { hasOrphanEntities } = useDataState();

	const hasErrors = hasOrphanEntities();

	const onClick: ButtonProps['onClick'] = useCallback(() => {
		onCloseModal();
	}, [onCloseModal]);

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
