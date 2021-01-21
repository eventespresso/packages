import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import DateFormSteps from './DateFormSteps';
import useDataListener from './useDataListener';
import { ContentBodyProps } from './types';
import { ASSIGN_TICKETS_STEP, DATE_DETAILS_STEP } from './constants';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ContentBody: React.FC<ContentBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<DateFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === DATE_DETAILS_STEP && body}

			{steps.current === ASSIGN_TICKETS_STEP && <TicketAssignmentsManager />}
		</div>
	);
};

export default ContentBody;
