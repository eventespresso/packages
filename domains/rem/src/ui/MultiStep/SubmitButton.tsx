import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonType, ButtonProps } from '@eventespresso/ui-components';
import { useGenerateDates } from '../../data';
import { useIsCountCapped } from '../../utils';

const SubmitButton: React.FC<ButtonProps> = ({ onClick }) => {
	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();

	const isCountCapped = useIsCountCapped(true);

	// either there are no dates to create
	// or someone is trying to be oversmart
	const isDisabled = !generateDates.length || isCountCapped;

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
