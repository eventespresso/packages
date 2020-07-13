import React from 'react';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { ModalWithAlert } from '@eventespresso/components';

import { ContentBody, ContentFooter } from '../MultiStep';
import useCancelButtonProps from './useCancelButtonProps';
import { withContext } from '../../context';

import './styles.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const { isOpen: isRecurrenceOpen, onOpen: onRecurrenceOpen } = useDisclosure({ defaultIsOpen: false });
	const cancelButtonProps = useCancelButtonProps(onClose);

	const bodyClassName = classNames(!isRecurrenceOpen && 'ee-rem-modal__body--centered', 'ee-rem-modal__body');

	const footerContent = isRecurrenceOpen && <ContentFooter />;

	return (
		<ModalWithAlert
			bodyClassName={bodyClassName}
			cancelButtonProps={cancelButtonProps}
			className='ee-rem-modal'
			footerContent={footerContent}
			isOpen={isOpen}
			onClose={onClose}
			showAlertOnEscape={false}
			title={__('Recurring Events Manager')}
			withBorder
		>
			{isRecurrenceOpen ? <ContentBody /> : <Button buttonText={__('Convert date')} onClick={onRecurrenceOpen} />}
		</ModalWithAlert>
	);
};

export default withContext(Modal);
