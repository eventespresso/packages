import { useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import type { ButtonProps } from '@eventespresso/adapters';

const useCancelButtonProps = (onCancel: VoidFunction): ButtonProps => {
	return useMemo<ButtonProps>(() => {
		return onCancel
			? {
					buttonText: __('Cancel'),
					onClick: onCancel,
					type: 'reset',
			  }
			: null;
	}, [onCancel]);
};

export default useCancelButtonProps;
