import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { Button } from '../';
import { iconBtnClassName } from '../Button/IconButton';
import useConfirmationDialog from './useConfirmationDialog';
import type { ConfirmPropsWithButton } from './types';

const useConfirmWithButton: React.FC<ConfirmPropsWithButton> = ({ buttonProps, ...props }) => {
	const title = props.title || __('Please confirm this action.');
	const { confirmationDialog, onOpen } = useConfirmationDialog({ ...props, title });
	const btnClassName = classNames(buttonProps.icon && iconBtnClassName, buttonProps.className);

	return (
		<>
			<Button {...buttonProps} className={btnClassName} onClick={onOpen} />
			{confirmationDialog}
		</>
	);
};

export default useConfirmWithButton;
