import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Button, ButtonSize, NewEntityOption } from '@eventespresso/components';
import { Ticket } from '@eventespresso/icons';
import { Container as FormContainer } from '@edtrUI/tickets/ticketForm/multiStep';

type AddSingleTicketProps = {
	isOnlyButton?: boolean;
};

const AddSingleTicket: React.FC<AddSingleTicketProps> = ({ isOnlyButton }) => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();

	const output = (
		<>
			<Button
				buttonText={__('Add New Ticket')}
				onClick={onAddNew}
				buttonSize={isOnlyButton ? ButtonSize.BIG : null}
				icon={isOnlyButton ? Ticket : null}
			/>
			{isOpen && <FormContainer isOpen={true} onClose={onClose} />}
		</>
	);

	if (isOnlyButton) {
		return output;
	}
	return (
		<NewEntityOption
			title={__('Single Ticket')}
			icon={Ticket}
			description={__('Add a single ticket and assign the dates to it')}
		>
			{output}
		</NewEntityOption>
	);
};

export default AddSingleTicket;
