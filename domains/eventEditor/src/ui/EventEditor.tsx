import React from 'react';

import { DatesList } from './datetimes/datesList';
import { TicketsList } from './tickets/ticketsList';
// fire up the service and UI element registry
import './registryInit';

import { initToaster } from '@eventespresso/toaster';
import { useEditorInitialization } from '../hooks';
import { getRegisteredContainers } from '@edtrServices/utils';

import './styles.scss';
import EventMeta from './EventMeta';

const containers = getRegisteredContainers();

const EventEditor: React.FC = () => {
	useEditorInitialization();

	initToaster();

	return (
		<>
			<EventMeta />
			<DatesList />
			<TicketsList />
			{containers}
		</>
	);
};

export default EventEditor;
