import { useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import { SaveOutlined } from '@eventespresso/icons';

import { ButtonType } from '../../';
import type { ButtonProps } from '../../';

const useSubmitButtonProps = (onSubmit: VoidFunction): ButtonProps => {
	return useMemo<ButtonProps>(() => {
		return onSubmit
			? {
					buttonText: __('Submit'),
					buttonType: ButtonType.PRIMARY,
					icon: SaveOutlined,
					onClick: onSubmit,
					type: 'submit',
			  }
			: null;
	}, [onSubmit]);
};

export default useSubmitButtonProps;
