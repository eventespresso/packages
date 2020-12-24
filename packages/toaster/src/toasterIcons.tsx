import React from 'react';

import { Check, CloseCircleOutlined, InfoCircleOutlined, Spinner } from '@eventespresso/icons';

const fontSize = '1.2rem';

const toasterIcons = {
	error: <CloseCircleOutlined color='rgb(255, 77, 79)' fontSize={fontSize} />,
	info: <InfoCircleOutlined color='var(--ee-color-primary)' fontSize={fontSize} />,
	loading: <Spinner className='ee-loading-spinner' color='var(--ee-color-primary)' fontSize={fontSize} />,
	success: <Check color='var(--ee-color-primary)' fontSize={fontSize} />,
	warning: <InfoCircleOutlined color='var(--ee-color-accent)' fontSize={fontSize} />,
};

export default toasterIcons;
