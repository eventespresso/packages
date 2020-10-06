import type { ModalProps as ModalAdapterProps } from '@eventespresso/adapters';
import type { ButtonProps } from '../';

export interface ModalWithAlertProps extends ModalProps {
	cancelBtnText?: string;
	header?: string;
	okBtnText?: string;
	onCancel?: VoidFunction;
	onSubmit?: VoidFunction;
	showAlertOnEscape?: boolean;
}

export interface ModalProps extends ModalAdapterProps {
	cancelButtonProps?: ButtonProps;
	closeButton?: React.ReactNode;
	content?: React.ReactNode;
	destroyOnClose?: boolean;
	footerContent?: React.ReactNode;
	submitButtonProps?: ButtonProps;
	withBorder?: boolean;
}
