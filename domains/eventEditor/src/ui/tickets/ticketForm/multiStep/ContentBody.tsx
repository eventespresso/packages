import { TicketPriceCalculator } from '@eventespresso/tpc';

import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import TicketFormSteps from './TicketFormSteps';
import useDataListener from './useDataListener';
import { ContentBodyProps } from './types';

const ContentBody: React.FC<ContentBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === 0 && body}
			{steps.current === 1 && <TicketPriceCalculator context='editTicketForm' />}
			{steps.current === 2 && <TicketAssignmentsManager />}
		</div>
	);
};

export default ContentBody;
