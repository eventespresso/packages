import React from 'react';
import { __ } from '@eventespresso/i18n';

import { ModalWithAlert } from '@eventespresso/ui-components';

import { ContentBody, ContentFooter } from '../MultiStep';
import type { BaseProps } from '../types';

import './styles.scss';

const Modal: React.FC<BaseProps> = ({ isOpen, onClose, onSubmit }) => {
	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			title={__('Recurring Events Manager')}
			withBorder
		>
			<ContentBody />
			<ContentFooter onSubmit={onSubmit} onClose={onClose} />
		</ModalWithAlert>
	);
};

export default Modal;
