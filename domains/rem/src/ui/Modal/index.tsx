import React from 'react';
import { __ } from '@wordpress/i18n';
import type { UseDisclosureReturn } from '@chakra-ui/hooks';

import { ModalWithAlert } from '@eventespresso/components';

import { ContentBody, ContentFooter } from '../MultiStep';
import { withContext } from '../../context';

import './styles.scss';

const Modal: React.FC<Partial<UseDisclosureReturn>> = ({ isOpen, onClose }) => {
	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			showAlertOnEscape={false}
			size='lg'
			title={__('Recurring Events Manager')}
			withBorder
		>
			<ContentBody />
			<ContentFooter onClose={onClose} />
		</ModalWithAlert>
	);
};

export default withContext(Modal);
