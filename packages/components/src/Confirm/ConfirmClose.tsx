import React from 'react';
import { __ } from '@eventespresso/i18n';

import { ModalCloseButtonProps } from '@eventespresso/adapters';
import useConfirmWithButton from './useConfirmWithButton';

const ConfirmClose: React.FC<ModalCloseButtonProps> = (props) => {
	const title = props.title || __('Are you sure you want to close this?');
	const confirm = useConfirmWithButton({ ...props, title });

	return confirm;
};

export default ConfirmClose;
