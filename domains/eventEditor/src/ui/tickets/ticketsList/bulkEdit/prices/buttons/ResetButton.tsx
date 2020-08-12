import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, ButtonProps } from '@eventespresso/components';

const ResetButton: React.FC<ButtonProps> = (props) => {
	return <Button buttonText={__('Reset')} {...props} />;
};

export default ResetButton;
