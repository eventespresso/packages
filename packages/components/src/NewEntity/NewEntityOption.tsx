import React from 'react';
import { Box } from '@chakra-ui/core';
import classNames from 'classnames';
import { NewEntityOptionProps } from './types';

const NewEntityOption: React.FC<NewEntityOptionProps> = ({
	button,
	children,
	className,
	description,
	icon: Icon,
	title,
}) => {
	const newClassName = classNames(className, 'ee-new-entity-option');
	return (
		<Box className={newClassName}>
			<Icon />
			<Box as='h4'>{title}</Box>
			<Box>{description}</Box>
			{button || children}
		</Box>
	);
};

export default NewEntityOption;
