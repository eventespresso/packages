import React from 'react';
import { __ } from '@wordpress/i18n';

import { ModalWithAlert } from '@eventespresso/components';

import { ContentBody, ContentFooter } from '../MultiStep';
import { withContext } from '../../context';

import './styles.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
			<ContentFooter onClose={onClose} />
		</ModalWithAlert>
	);
};

export default withContext(Modal);
