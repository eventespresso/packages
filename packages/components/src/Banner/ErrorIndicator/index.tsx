import React from 'react';

import { Banner } from '../';
import type { ErrorIndicatorProps } from './types';

import './style.scss';

const iconProps = {
	color: 'red.500',
	name: 'warning-2',
	size: '96px',
};

export const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ description, title }) => (
	<Banner
		className='ee-error-indicator'
		description={description}
		iconProps={iconProps}
		status='error'
		title={title}
		variant='subtle'
	/>
);
