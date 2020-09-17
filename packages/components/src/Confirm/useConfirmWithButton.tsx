import React from 'react';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { ModalCloseButton } from '@eventespresso/adapters';
import { iconBtnClassName } from '../Button/IconButton';
import useConfirmationDialog from './useConfirmationDialog';
import type { ConfirmProps } from './types';

const useConfirmWithButton: React.FC<ConfirmProps> = ({ className, icon, tooltip, ...props }) => {
	const title = (props.title || tooltip) ?? __('Please confirm this action.');
	const { confirmationDialog, onOpen } = useConfirmationDialog({ ...props, title });
	const btnClassName = classNames(icon && iconBtnClassName, className);

	return (
		<>
			<ModalCloseButton {...props} className={btnClassName} onClick={onOpen} />
			{confirmationDialog}
		</>
	);
};

export default useConfirmWithButton;
