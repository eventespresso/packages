import React from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/core';

import type { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	({ variant = 'unstyled', ...props }, ref) => {
		return <ChakraIconButton {...props} ref={ref} variant={variant} />;
	}
);
