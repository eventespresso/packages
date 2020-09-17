import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonSize, NewEntityOption } from '@eventespresso/components';
import { Ticket } from '@eventespresso/icons';
import { useGlobalModal } from '@eventespresso/registry';
import { EntityEditModalData } from '@edtrUI/types';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

type AddSingleTicketProps = {
	isOnlyButton?: boolean;
};

const AddSingleTicket: React.FC<AddSingleTicketProps> = ({ isOnlyButton }) => {
	const { open } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);

	const output = (
		<Button
			buttonText={__('Add New Ticket')}
			onClick={open}
			buttonSize={isOnlyButton ? ButtonSize.BIG : null}
			icon={isOnlyButton ? Ticket : null}
		/>
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
