import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Calendar, Ticket } from '@eventespresso/icons';
import { Button, ButtonRow, ButtonSize } from '@eventespresso/components';
import { useTicketAssignmentsManager } from '../../ticketAssignmentsManager';
import { Container as FormContainer } from '@edtrUI/datetimes/dateForm/multiStep';

const AddNewDateButton: React.FC = () => {
	const { ModalContainer, onOpen, ...disclosure } = useTicketAssignmentsManager();
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();

	return (
		<>
			<ButtonRow>
				<Button
					buttonSize={ButtonSize.BIG}
					buttonText={__('Add New Date')}
					icon={Calendar}
					mr={2}
					onClick={onAddNew}
				/>
				<Button
					buttonSize={ButtonSize.BIG}
					buttonText={__('Ticket Assignments')}
					icon={Ticket}
					onClick={onOpen}
				/>
			</ButtonRow>
			<ModalContainer assignmentType='forAll' {...disclosure} />
			<FormContainer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default AddNewDateButton;
