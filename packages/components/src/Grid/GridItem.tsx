import React from 'react';

import { Heading } from '../Heading';
import type { GridItemProps } from './types';

export const GridItem: React.FC<GridItemProps> = ({ className, id, input, label }) => (
	<div className={className}>
		<Heading as='h4' id={id}>
			{label}
		</Heading>
		{input}
	</div>
);
