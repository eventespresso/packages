import { ModalProps } from '@eventespresso/adapters';

export interface ModalWithAlertProps extends ModalProps {
	cancelBtnText?: string;
	header?: string;
	okBtnText?: string;
	onCancel?: VoidFunction;
	onSubmit?: VoidFunction;
	showAlertOnEscape: boolean;
}
