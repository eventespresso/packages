import React from 'react';

import { DatesList } from './datetimes/datesList';
import EventRegistrationOptions from './EventRegistrationOptions';
import { TicketsList } from './tickets/ticketsList';

import { initToaster } from '@eventespresso/toaster';
import { useEditorInitialization } from '../hooks';
import { getRegisteredContainers } from '@edtrServices/utils';

import './styles.scss';

// fire up the service and UI element registry
import './registryInit';

const containers = getRegisteredContainers();

const EventEditor: React.FC = () => {
	useEditorInitialization();

	initToaster();

	return (
		<>
			<EventRegistrationOptions />
			<DatesList />
			<TicketsList />
			{containers}
		</>
	);
};

export default EventEditor;
