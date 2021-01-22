import { ButtonProps, Submit } from '@eventespresso/ui-components';

import { useGenerateDates } from '../../data';
import { useIsCountCapped } from '../../utils';

const SubmitButton: React.FC<ButtonProps> = (props) => {
	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();

	const isCountCapped = useIsCountCapped(true);

	// either there are no dates to create
	// or someone is trying to be oversmart
	const isDisabled = !generateDates.length || isCountCapped;

	return <Submit {...props} isDisabled={isDisabled} />;
};

export default SubmitButton;
