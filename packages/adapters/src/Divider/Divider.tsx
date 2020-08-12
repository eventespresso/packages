import React from 'react';
import classNames from 'classnames';
import { Divider as ChakraDivider } from '@chakra-ui/core';

import type { DividerProps } from './types';
import './style.scss';

const Divider: React.FC<DividerProps> = ({
	children,
	className,
	orientation = 'horizontal',
	type = 'none',
	...props
}) => {
	const dividerClassName = classNames(
		className,
		'ee-divider',
		orientation === 'horizontal' && 'ee-divider--horizontal',
		orientation === 'vertical' && 'ee-divider--vertical'
	);
	return (
		<ChakraDivider className={dividerClassName} borderStyle={type} orientation={orientation} {...props}>
			{children}
		</ChakraDivider>
	);
};

export default Divider;
