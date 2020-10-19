import React from 'react';
import { Divider as ChakraDivider } from '@chakra-ui/core';

import type { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = ({ children, className, orientation, type }) => (
	<ChakraDivider className={className} borderStyle={type} orientation={orientation}>
		{children}
	</ChakraDivider>
);
