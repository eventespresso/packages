import { useCallback, useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import { SaveOutlined } from '@eventespresso/icons';

import { ButtonType } from '../../';
import type { ButtonProps } from '../../';

const useSubmitButtonProps = (onCloseModal: VoidFunction): ButtonProps => {
	const onSubmit: ButtonProps['onClick'] = useCallback(
		(e) => {
			e.preventDefault();
			onCloseModal();
		},
		[onCloseModal]
	);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Submit'),
			buttonType: ButtonType.PRIMARY,
			icon: SaveOutlined,
			onClick: onSubmit,
			type: 'submit',
		}),
		[onSubmit]
	);
};

export default useSubmitButtonProps;
