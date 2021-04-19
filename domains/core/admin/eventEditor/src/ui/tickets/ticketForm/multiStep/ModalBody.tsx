import TicketFormSteps from './TicketFormSteps';
import { ModalBodyProps } from './types';
import { ASSIGN_DATES_STEP, TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';
import TPCStep from './TPCStep';
import TAMStep from './TAMStep';

const ModalBody: React.FC<ModalBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data

	return (
		<div>
			<TicketFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === TICKET_DETAILS_STEP && body}
			{steps.current === TICKET_PRICES_STEP && <TPCStep />}
			{steps.current === ASSIGN_DATES_STEP && <TAMStep />}
		</div>
	);
};

export default ModalBody;
