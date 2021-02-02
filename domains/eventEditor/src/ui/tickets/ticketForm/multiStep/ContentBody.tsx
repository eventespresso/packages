import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import TicketFormSteps from './TicketFormSteps';
import TPCStep from './TPCStep';
import useDataListener from './useDataListener';
import { ContentBodyProps } from './types';
import { ASSIGN_DATES_STEP, TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';

const ContentBody: React.FC<ContentBodyProps> = ({ children: body, steps, ticket }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === TICKET_DETAILS_STEP && body}
			{steps.current === TICKET_PRICES_STEP && <TPCStep ticket={ticket} />}
			{steps.current === ASSIGN_DATES_STEP && <TicketAssignmentsManager />}
		</div>
	);
};

export default ContentBody;
