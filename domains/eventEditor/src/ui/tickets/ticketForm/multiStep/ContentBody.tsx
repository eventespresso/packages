import { TicketPriceCalculator } from '@eventespresso/tpc';
import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import TicketFormSteps from './TicketFormSteps';
import useDataListener from './useDataListener';
import { ContentBodyProps } from './types';
import { ASSIGN_DATES_STEP, TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';

const ContentBody: React.FC<ContentBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === TICKET_DETAILS_STEP && body}
			{steps.current === TICKET_PRICES_STEP && <TicketPriceCalculator context='editTicketForm' />}
			{steps.current === ASSIGN_DATES_STEP && <TicketAssignmentsManager />}
		</div>
	);
};

export default ContentBody;
