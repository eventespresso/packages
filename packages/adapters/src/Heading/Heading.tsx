import React from 'react';
import { Heading as ChakraHeading } from '@chakra-ui/core';

import type { HeadingProps } from './types';

export const Heading: React.FC<HeadingProps> = ({ children, className, ...props }) => {
	return (
		<ChakraHeading {...props} className={className}>
			{children}
		</ChakraHeading>
	);
};
