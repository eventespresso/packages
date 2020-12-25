import React, { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { Modal } from './Modal';
import { useConfirmationDialog } from '../Confirm';
import useCancelButtonProps from './useCancelButtonProps';
import useSubmitButtonProps from './useSubmitButtonProps';
import { ModalWithAlertProps } from './types';

export const ModalWithAlert: React.FC<ModalWithAlertProps> = ({
	alertText,
	children,
	onCancel,
	onClose,
	onSubmit,
	showAlertOnClose = true,
	...props
}) => {
	const cancelButtonProps = useCancelButtonProps(onCancel);
	const submitButtonProps = useSubmitButtonProps(onSubmit);

	const title = __('Alert!');
	const message = alertText || __('Are you sure you want to close this?');

	const { confirmationDialog, onOpen: showAlert } = useConfirmationDialog({
		message,
		title,
		onConfirm: onClose as VoidFunction,
	});

	/**
	 * This handler is called when:
	 * - User clicks on the close button
	 * - Esc is pressed on keyboard and closeOnEsc is not disabled
	 * - User clicks on the modal overlay and closeOnOverlayClick is not disabled
	 */
	const onCloseHandler = useCallback<ModalWithAlertProps['onClose']>(
		(...args) => (showAlertOnClose ? showAlert() : onClose?.(...args)),
		[showAlertOnClose, showAlert, onClose]
	);

	return (
		<>
			<Modal
				{...props}
				cancelButtonProps={props.cancelButtonProps || cancelButtonProps}
				onClose={onCloseHandler}
				submitButtonProps={props.submitButtonProps || submitButtonProps}
			>
				{children}
			</Modal>
			{showAlertOnClose && confirmationDialog}
		</>
	);
};
