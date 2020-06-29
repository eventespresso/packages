import React from 'react';
import { __ } from '@wordpress/i18n';

import { ModalWithAlert } from '@eventespresso/components';

const Modal = ({ isOpen, datetime, onClose }) => {
	if (!isOpen) {
		return null;
	}
	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			className='ee-rem-modal'
			isOpen={true}
			onClose={onClose}
			title={__('Recurring Events Manager')}
			showAlertOnEscape={false}
		>
			<pre>{JSON.stringify(datetime, null, 4)}</pre>
		</ModalWithAlert>
	);
};

export default Modal;
