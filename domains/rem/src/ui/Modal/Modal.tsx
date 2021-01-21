import { __ } from '@eventespresso/i18n';

import { ModalWithAlert, ModalWithAlertProps } from '@eventespresso/ui-components';

import './styles.scss';

const Modal: React.FC<ModalWithAlertProps> = ({ isOpen, onClose, title, ...props }) => {
	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			onCancel={onClose}
			title={title || __('Recurring Events Manager')}
			withBorder
			{...props}
		/>
	);
};

export default Modal;
