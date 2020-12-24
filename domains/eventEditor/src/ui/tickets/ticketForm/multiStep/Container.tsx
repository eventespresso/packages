import React, { useCallback } from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import { useEvent, useTicketItem, EdtrGlobalModals } from '@eventespresso/edtr-services';
import { EntityEditModalContainer } from '@eventespresso/ee-components';
import { useGlobalModal } from '@eventespresso/registry';

import Content from './Content';
import { EntityEditModalData } from '@edtrUI/types';

const Container: React.FC = () => {
	const { getData, isOpen, close: closeModal, setData } = useGlobalModal<EntityEditModalData>(
		EdtrGlobalModals.EDIT_TICKET
	);
	const ticket = useTicketItem({ id: getData()?.entityId });
	const event = useEvent();

	let title = ticket?.dbId
		? sprintf(
				/* translators: %s ticket id */
				__('Edit ticket %s'),
				`#${ticket.dbId}`
		  )
		: __('New Ticket Details');

	// add event name to the title
	title = event?.name ? `${event.name}: ${title}` : title;

	const onClose = useCallback(() => {
		closeModal();
		// reset the global modal data
		setData({ entityId: null });
	}, [closeModal, setData]);

	return (
		<EntityEditModalContainer component={Content} entity={ticket} title={title} isOpen={isOpen} onClose={onClose} />
	);
};

export default Container;
