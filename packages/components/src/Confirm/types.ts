import { ModalCloseButtonProps } from '@eventespresso/adapters';

export interface ConfirmProps extends ModalCloseButtonProps {
	message?: string;
	noButtonText?: string;
	onConfirm?: VoidFunction;
	onCancel?: VoidFunction;
	title?: string;
	yesButtonText?: string;
}
