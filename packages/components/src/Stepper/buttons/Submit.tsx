import React, { memo } from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonProps, ButtonType } from '../../../';
import { SaveOutlined } from '@eventespresso/icons';

const Submit: React.FC<ButtonProps> = ({ isDisabled, onClick, ...props }) => {
	const buttonText = props.buttonText || __('Submit');

	return (
		<Button
			buttonText={buttonText}
			buttonType={ButtonType.PRIMARY}
			onClick={onClick}
			isDisabled={isDisabled}
			icon={SaveOutlined}
		/>
	);
};

export default memo(Submit);
