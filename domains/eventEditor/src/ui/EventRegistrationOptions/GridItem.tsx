import React from 'react';

import { Heading } from '@eventespresso/components';
import type { GridItemProps } from './types';

const GridItem: React.FC<GridItemProps> = ({ id, input, label }) => (
	<div>
		<Heading as='h4' id={id}>
			{label}
		</Heading>
		{input}
	</div>
);

export default GridItem;
