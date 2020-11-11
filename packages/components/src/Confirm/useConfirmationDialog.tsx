import React, { useCallback, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { __ } from '@eventespresso/i18n';
import { AlertDialog, Button, ButtonType } from '../';
import type { ConfirmProps } from './types';

type UseConfirmationDialog = {
	confirmationDialog: React.ReactNode;
	onOpen: VoidFunction;
};

const useConfirmationDialog = ({
	message,
	onConfirm,
	title,
	onCancel,
	...props
}: ConfirmProps): UseConfirmationDialog => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();
	const onClickHandler = useCallback(() => {
		if (typeof onConfirm === 'function') {
			onConfirm();
		}
		onClose();
	}, [onClose, onConfirm]);

	const onCancelHandler = useCallback(() => {
		onClose();
		onCancel?.();
	}, [onCancel, onClose]);

	const noButtonText = props.noButtonText || __('No');
	const yesButtonText = props.yesButtonText || __('Yes');

	return useMemo(() => {
		const cancelButton = <Button buttonText={noButtonText} ref={cancelRef} onClick={onCancelHandler} />;

		const okButton = (
			<Button buttonText={yesButtonText} buttonType={ButtonType.ACCENT} onClick={onClickHandler} ml={3} />
		);

		const confirmationDialog = (
			<AlertDialog
				body={message}
				cancelButton={cancelButton}
				header={title}
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				okButton={okButton}
				onClose={onCancelHandler}
			/>
		);

		return { confirmationDialog, onOpen };
	}, [isOpen, message, noButtonText, onCancelHandler, onClickHandler, onOpen, title, yesButtonText]);
};

export default useConfirmationDialog;
