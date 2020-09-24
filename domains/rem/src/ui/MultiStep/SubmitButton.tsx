import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonType, ButtonProps } from '@eventespresso/components';
import { useGenerateDates } from '../../data';

const SubmitButton: React.FC<ButtonProps> = ({ onClick }) => {
	// rDates and gDates, no exDates
	const generateDates = useGenerateDates();

	return (
		<Button
			buttonText={__('Submit')}
			buttonType={ButtonType.PRIMARY}
			isDisabled={!generateDates.length}
			type='submit'
			onClick={onClick}
		/>
	);
};

export default SubmitButton;
