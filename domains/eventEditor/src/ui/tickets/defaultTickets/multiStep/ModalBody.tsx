import TicketFormSteps from './TicketFormSteps';
import { ModalBodyProps } from './types';
import { TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from '../../ticketForm/multiStep/constants';
import TPCStep from './TPCStep';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ModalBody: React.FC<ModalBodyProps> = ({ children: body, steps }) => {
	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === TICKET_DETAILS_STEP && body}

			{steps.current === TICKET_PRICES_STEP && <TPCStep />}
		</div>
	);
};

export default ModalBody;
