import React from 'react';
import classNames from 'classnames';

import { Banner } from '../Banner';
import type { EmptyStateProps } from './types';

import './style.scss';

const iconProps = { name: 'question-outline' };

const EmptyState: React.FC<EmptyStateProps> = ({ children, description, title, ...props }) => {
	const className = classNames('ee-empty-state', props.className);

	return (
		<Banner
			className={className}
			description={description}
			iconProps={iconProps}
			status='warning'
			title={title}
			variant='subtle'
		>
			{children && children}
		</Banner>
	);
};

export default EmptyState;
