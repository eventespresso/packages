import React from 'react';
import { __ } from '@wordpress/i18n';

import { ModalWithAlert } from '@eventespresso/components';

import { ContentBody, ContentFooter } from '../MultiStep';
import { BaseProps } from '../types';

import './styles.scss';

const Modal: React.FC<BaseProps> = ({ isOpen, onClose, onSubmit }) => {
	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			showAlertOnEscape={false}
			title={__('Recurring Events Manager')}
			withBorder
		>
			<ContentBody />
			<ContentFooter onSubmit={onSubmit} onClose={onClose} />
		</ModalWithAlert>
	);
};

export default Modal;
