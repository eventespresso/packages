import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonType, ButtonProps } from '@eventespresso/components';
import { useGenerateDates } from '../../data';
import { useLimitsWarning } from '../generatedDates';

const SubmitButton: React.FC<ButtonProps> = ({ onClick }) => {
	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();

	const warning = useLimitsWarning(true);

	// either there are no dates to create or
	// someone is trying to be oversmart
	const isDisabled = !generateDates.length || Boolean(warning);

	return (
		<Button
			buttonText={__('Submit')}
			buttonType={ButtonType.PRIMARY}
			isDisabled={isDisabled}
			type='submit'
			onClick={onClick}
		/>
	);
};

export default SubmitButton;
