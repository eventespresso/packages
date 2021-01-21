import { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import type { ButtonProps } from '@eventespresso/ui-components';

const useCancelButtonProps = (onCancel: VoidFunction): ButtonProps => {
	return useMemo<ButtonProps>(() => {
		return onCancel
			? {
					buttonText: __('Cancel'),
					onClick: onCancel,
			  }
			: null;
	}, [onCancel]);
};

export default useCancelButtonProps;
