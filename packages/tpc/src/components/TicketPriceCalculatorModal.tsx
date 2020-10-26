import React from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import TicketPriceCalculator from './TicketPriceCalculator';
import useResetButtonProps from '../buttons/useResetButtonProps';
import useSubmitButtonProps from '../buttons/useSubmitButtonProps';
import { ConfirmClose, Modal } from '@eventespresso/components';

import { useTPCContext } from '../context';
import { useDataState } from '../data';
import { TPCModalProps } from '../types';

import './styles.scss';

const TicketPriceCalculatorModal: React.FC<TPCModalProps> = ({ onSubmit }) => {
	const { onClose } = useTPCContext();
	const { ticket } = useDataState();
	const resetButtonProps = useResetButtonProps();
	const submitButtonProps = useSubmitButtonProps(onSubmit);

	return (
		<Modal
			closeButton={<ConfirmClose onConfirm={onClose} />}
			isOpen={true}
			onClose={onClose}
			className='ee-tpc'
			bodyClassName='ee-tpc__body'
			submitButtonProps={submitButtonProps}
			cancelButtonProps={resetButtonProps}
			title={sprintf(
				/* translators: %s ticket name */
				__('Price Calculator for Ticket: %s'),
				ticket.name
			)}
		>
			<TicketPriceCalculator />
		</Modal>
	);
};

export default TicketPriceCalculatorModal;
