import type { ButtonProps } from '../Button';

export interface ConfirmProps {
	message?: string;
	noButtonText?: string;
	onConfirm?: VoidFunction;
	onCancel?: VoidFunction;
	title?: string;
	yesButtonText?: string;
}

export interface ConfirmPropsWithButton extends ConfirmProps {
	asIconButton?: boolean;
	buttonProps: ButtonProps;
}
