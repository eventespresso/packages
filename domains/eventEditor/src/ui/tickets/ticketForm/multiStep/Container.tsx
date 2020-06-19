import React from 'react';
import { __, sprintf } from '@wordpress/i18n';

import { ContainerProps } from './types';
import { Container as EditModalContainer } from '@eventespresso/unknown'; // '@sharedUI/entityEditModal';
import { useEvent, useTicketItem } from '@eventespresso/edtr-services';
import Content from './Content';

const Container: React.FC<ContainerProps> = ({ ticketId, ...props }) => {
	const ticket = useTicketItem({ id: ticketId });
	const event = useEvent();

	let title = ticket?.dbId ? sprintf(__('Edit ticket %s'), `#${ticket.dbId}`) : __('New Ticket Details');

	// add event name to the title
	title = event?.name ? `${event.name}: ${title}` : title;

	return <EditModalContainer component={Content} entity={ticket} title={title} {...props} />;
};

export default Container;
