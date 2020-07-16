import React from 'react';

import useNewTicketOptionItems from '@edtrUI/tickets/hooks/useNewTicketOptionItems';
import OptionsPopover from './OptionsPopover';

const NewTicketButton: React.FC = () => {
	const optionItems = useNewTicketOptionItems();
	if (optionItems.length > 1) {
		return <OptionsPopover>{optionItems}</OptionsPopover>;
	}
	return <>{optionItems}</>;
};

export default NewTicketButton;
