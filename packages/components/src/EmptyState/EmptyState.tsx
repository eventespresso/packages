import React from 'react';
import classNames from 'classnames';

import { Banner } from '../Banner';

interface EmptyStateProps {
	children?: React.ReactNode;
	className?: string;
	description: string;
	title?: string;
}

const iconProps = { name: 'question-outline' };

const EmptyState: React.FC<EmptyStateProps> = ({ children, description, title, ...props }) => {
	const className = classNames(props.className, 'ee-empty-state');

	return (
		<Banner
			backgroundColor='var(--ee-color-grey-15)'
			className={className}
			description={description}
			flexDirection='column'
			justifyContent='center'
			iconProps={iconProps}
			status='warning'
			textAlign='center'
			title={title}
			variant='subtle'
		>
			{children && children}
		</Banner>
	);
};

export default EmptyState;
