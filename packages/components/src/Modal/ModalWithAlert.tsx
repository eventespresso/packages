import React, { useEffect } from 'react';
import { ESCAPE } from '@wordpress/keycodes';
import { __ } from '@wordpress/i18n';

import { canUseDOM } from '@eventespresso/services';
import { Modal, ModalProps } from '@eventespresso/adapters';
import { useConfirmationDialog } from '../Confirm';

interface Props extends ModalProps {
	cancelBtnText?: string;
	header?: string;
	okBtnText?: string;
	showAlertOnEscape: boolean;
}

const ModalWithAlert: React.FC<Props> = ({ children, showAlertOnEscape, ...props }) => {
	const title = props.header || __('Are you sure you want to close this?');
	const { confirmationDialog, onOpen } = useConfirmationDialog({
		title,
		onConfirm: props.onClose as VoidFunction,
	});

	const onEscape = ({ keyCode }): void => {
		if (keyCode === ESCAPE) {
			onOpen();
		}
	};

	useEffect(() => {
		if (canUseDOM) {
			document.addEventListener('keydown', onEscape);
		}

		return () => {
			if (canUseDOM) {
				document.removeEventListener('keydown', onEscape);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Modal {...props} closeOnEsc={!showAlertOnEscape}>
				{children}
			</Modal>
			{showAlertOnEscape && confirmationDialog}
		</>
	);
};

export default ModalWithAlert;
