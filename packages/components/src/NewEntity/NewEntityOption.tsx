import React from 'react';
import { Box } from '@eventespresso/adapters';
import classNames from 'classnames';
import { NewEntityOptionProps } from './types';

const NewEntityOption: React.FC<NewEntityOptionProps> = ({
	button,
	children,
	description,
	icon: Icon,
	title,
	...props
}) => {
	const className = classNames(props.className, 'ee-new-entity-option');

	return (
		<div className={className}>
			<Icon />
			<Box as='h4'>{title}</Box>
			<p className='ee-new-entity-option__description'>{description}</p>
			{button || children}
		</div>
	);
};

export default NewEntityOption;
