import { useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { SaveOutlined } from '@eventespresso/icons';

import { ButtonType } from '../../';
import type { ButtonProps } from '../../';

const useSubmitButtonProps = (onSubmit: VoidFunction, isDisabled?: boolean): ButtonProps => {
	return useMemo<ButtonProps>(() => {
		return onSubmit
			? {
					buttonText: __('Submit'),
					buttonType: ButtonType.PRIMARY,
					icon: SaveOutlined,
					isDisabled,
					onClick: onSubmit,
					type: 'submit',
			  }
			: null;
	}, [onSubmit, isDisabled]);
};

export default useSubmitButtonProps;
