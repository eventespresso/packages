import React from 'react';
import { __ } from '@wordpress/i18n';

import { Ticket } from '@eventespresso/icons';
import { Button, ButtonRow, ButtonSize } from '@eventespresso/components';
import { useTicketAssignmentsManager } from '../../ticketAssignmentsManager';
import { NewDateButton } from './newDateOptions';

const DatesListButtons: React.FC = () => {
	const { ModalContainer, onOpen, ...disclosure } = useTicketAssignmentsManager();

	return (
		<>
			<ButtonRow>
				<NewDateButton />
				<Button
					buttonSize={ButtonSize.BIG}
					buttonText={__('Ticket Assignments')}
					icon={Ticket}
					onClick={onOpen}
				/>
			</ButtonRow>
			<ModalContainer assignmentType='forAll' {...disclosure} />
		</>
	);
};

export default DatesListButtons;
