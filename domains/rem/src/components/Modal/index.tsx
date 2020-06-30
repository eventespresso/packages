import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { __ } from '@wordpress/i18n';

import { Button } from '@eventespresso/components';
import { ModalWithAlert } from '@eventespresso/components';

// import { EditDatetimeRecurrence } from '../EditDatetimeRecurrence';
// import { ContentBody } from '../MultiStep';
import useCancelButtonProps from './useCancelButtonProps';

const Modal: React.FC<any> = ({ isOpen, datetime, onClose }) => {
	const { isOpen: isRecurrenceOpen, onOpen: onRecurrenceOpen } = useDisclosure();
	const cancelButtonProps = useCancelButtonProps(onClose);

	return (
		<ModalWithAlert
			bodyClassName='ee-rem-modal__body'
			cancelButtonProps={cancelButtonProps}
			className='ee-rem-modal'
			isOpen={isOpen}
			onClose={onClose}
			title={__('Recurring Events Manager')}
			showAlertOnEscape={false}
		>
			<Button buttonText={__('Convert date')} onClick={onRecurrenceOpen} />
			{/* {isRecurrenceOpen && <EditDatetimeRecurrence />} */}
			{/* {isRecurrenceOpen && <ContentBody />} */}
		</ModalWithAlert>
	);
};

export default Modal;
