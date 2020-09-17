import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonProps } from '@eventespresso/components';

const CancelButton: React.FC<ButtonProps> = (props) => {
	return <Button buttonText={__('Cancel')} {...props} />;
};

export default CancelButton;
