import React from 'react';
import { SimpleGrid } from '@chakra-ui/layout';

import type { GridProps } from './types';

export const Grid: React.FC<GridProps> = ({ children, className, columns, spacing }) => {
	return (
		<SimpleGrid className={className} columns={columns} spacing={spacing}>
			{children}
		</SimpleGrid>
	);
};
