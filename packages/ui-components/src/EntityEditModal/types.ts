import type { ModalWithAlertProps } from '../Modal';

export interface EntityEditModalProps extends Partial<ModalWithAlertProps> {
	showCancelButton?: boolean;
}
