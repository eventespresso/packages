import React from 'react';

import { getRegisteredContainers } from '@edtrServices/utils';
import { useEdtrState } from '@eventespresso/edtr-services';

import { DatesList } from './datetimes/datesList';
import EventRegistrationOptions from './EventRegistrationOptions';
import { TicketsList } from './tickets/ticketsList';
// fire up the service and UI element registry
import './registryInit';
import Init from './Init';

import './styles.scss';

const containers = getRegisteredContainers();

const EventEditor: React.FC = () => {
	const { isRehydrated } = useEdtrState();
	return (
		<>
			{!isRehydrated && <Init />}
			<EventRegistrationOptions />
			<DatesList />
			<TicketsList />
			{containers}
		</>
	);
};

export default EventEditor;
