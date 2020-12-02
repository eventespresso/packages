import React from 'react';
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
	const className = classNames('ee-new-entity-option', props.className);

	return (
		<div className={className}>
			<Icon />
			<h4>{title}</h4>
			<p className='ee-new-entity-option__description'>{description}</p>
			{button || children}
		</div>
	);
};

export default NewEntityOption;
