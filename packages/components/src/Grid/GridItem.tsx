import React from 'react';
import classNames from 'classnames';

import { Heading } from '../Heading';
import type { GridItemProps } from './types';

export const GridItem: React.FC<GridItemProps> = ({ id, input, label, size, ...props }) => {
	const className = classNames('ee-grid__item', size && `ee-grid__item--size-${size}`, props.className);

	return (
		<div className={className}>
			<Heading as='h6' id={id}>
				{label}
			</Heading>
			{input}
		</div>
	);
};
