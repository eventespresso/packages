import React from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/core';

import type { BadgeProps } from './types';

export const Badge: React.FC<BadgeProps> = ({ className, children, style }) => (
	<ChakraBadge className={className} style={style}>
		{children}
	</ChakraBadge>
);
