import React from 'react';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import type { Datetime } from '@eventespresso/edtr-services';
import { ModalWithAlert } from '@eventespresso/components';

import { useMultiStep } from '../MultiStep';
import useCancelButtonProps from './useCancelButtonProps';

import './styles.scss';

interface ModalProps {
	datetime: Datetime;
	isOpen: boolean;
	onClose: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ isOpen, datetime, onClose }) => {
	const { isOpen: isRecurrenceOpen, onOpen: onRecurrenceOpen } = useDisclosure({ defaultIsOpen: false });
	const cancelButtonProps = useCancelButtonProps(onClose);
	const { multiStepContent, multiStepFooter } = useMultiStep(datetime);

	const bodyClassName = classNames(!isRecurrenceOpen && 'ee-rem-modal__body--centered', 'ee-rem-modal__body');

	return (
		<ModalWithAlert
			bodyClassName={bodyClassName}
			cancelButtonProps={cancelButtonProps}
			className='ee-rem-modal'
			footerContent={isRecurrenceOpen && multiStepFooter}
			isOpen={isOpen}
			onClose={onClose}
			showAlertOnEscape={false}
			title={__('Recurring Events Manager')}
			withBorder
		>
			{!isRecurrenceOpen && <Button buttonText={__('Convert date')} onClick={onRecurrenceOpen} />}
			{isRecurrenceOpen && multiStepContent}
		</ModalWithAlert>
	);
};

export default Modal;
