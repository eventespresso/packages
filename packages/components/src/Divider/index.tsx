import React from 'react';
import classNames from 'classnames';

import { Divider as DividerAdapter } from '@eventespresso/adapters';
import type { DividerProps } from './types';

import './style.scss';

export const Divider: React.FC<DividerProps> = ({
	children,
	orientation = 'horizontal',
	size,
	type = 'none',
	...props
}) => {
	const className = classNames(
		'ee-divider',
		orientation && `ee-divider--${orientation}`,
		size && `ee-divider--size-${size}`,
		props.className
	);

	return (
		<DividerAdapter className={className} type={type} orientation={orientation}>
			{children}
		</DividerAdapter>
	);
};
