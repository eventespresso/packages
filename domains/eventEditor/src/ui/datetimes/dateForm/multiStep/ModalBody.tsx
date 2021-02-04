import DateFormSteps from './DateFormSteps';
import useDataListener from './useDataListener';
import { ModalBodyProps } from './types';
import { ASSIGN_TICKETS_STEP, DATE_DETAILS_STEP } from './constants';
import TAMStep from './TAMStep';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ModalBody: React.FC<ModalBodyProps> = ({ children: body, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return (
		<div>
			<DateFormSteps current={steps.current} />
			{/* RFF fields */}
			{steps.current === DATE_DETAILS_STEP && body}

			{steps.current === ASSIGN_TICKETS_STEP && <TAMStep />}
		</div>
	);
};

export default ModalBody;
