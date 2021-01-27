import { TicketPriceCalculator } from '@eventespresso/tpc';

import TicketFormSteps from './TicketFormSteps';
import useDataListener from './useDataListener';
import { ModalBodyProps } from './types';
import { TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ModalBody: React.FC<ModalBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === TICKET_DETAILS_STEP && body}

			{steps.current === TICKET_PRICES_STEP && <TicketPriceCalculator context='editTicketForm' />}
		</div>
	);
};

export default ModalBody;
