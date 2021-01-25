import { TicketPriceCalculator } from '@eventespresso/tpc';

import TicketFormSteps from './TicketFormSteps';

import { TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';

interface Props {
	currentStep: number;
}

const RemStepRender: React.FC<Props> = ({ children, currentStep }) => {
	return (
		<>
			<TicketFormSteps current={currentStep} />
			{/* RFF fields */}
			{currentStep === TICKET_DETAILS_STEP && children}

			{currentStep === TICKET_PRICES_STEP && <TicketPriceCalculator context='editTicketForm' />}
		</>
	);
};

export default RemStepRender;
