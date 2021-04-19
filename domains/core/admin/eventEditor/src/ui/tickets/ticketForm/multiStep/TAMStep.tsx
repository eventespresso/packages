import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import useDataListener from './useDataListener';

const TAMStep = () => {
	useDataListener();

	return <TicketAssignmentsManager />;
};

export default TAMStep;
