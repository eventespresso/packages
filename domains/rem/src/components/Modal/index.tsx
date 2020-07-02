import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import type { Datetime } from '@eventespresso/edtr-services';
import { ModalWithAlert } from '@eventespresso/components';

import { ContentBody as MultiStepContent } from '../MultiStep';
import useCancelButtonProps from './useCancelButtonProps';

import './styles.scss';

interface ModalProps {
	datetime: Datetime;
	isOpen: boolean;
	onClose: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ isOpen, datetime, onClose }) => {
	const { isOpen: isRecurrenceOpen, onOpen: onRecurrenceOpen } = useDisclosure();
	const cancelButtonProps = useCancelButtonProps(onClose);

	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			cancelButtonProps={cancelButtonProps}
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			showAlertOnEscape={false}
			title={__('Recurring Events Manager')}
		>
			{!isRecurrenceOpen && <Button buttonText={__('Convert date')} onClick={onRecurrenceOpen} />}
			{isRecurrenceOpen && <MultiStepContent datetime={datetime} />}
		</ModalWithAlert>
	);
};

export default Modal;
