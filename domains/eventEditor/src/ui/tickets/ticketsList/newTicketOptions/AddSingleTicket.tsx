import { __ } from '@eventespresso/i18n';

import { Button, NewEntityOption } from '@eventespresso/ui-components';
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
			icon={isOnlyButton ? Ticket : null}
			onClick={open}
			size={isOnlyButton ? 'big' : 'default'}
		/>
	);

	if (isOnlyButton) {
		return output;
	}

	return (
		<NewEntityOption
			description={__('Add a single ticket and assign the dates to it')}
			icon={Ticket}
			title={__('Single Ticket')}
		>
			{output}
		</NewEntityOption>
	);
};

export default AddSingleTicket;
