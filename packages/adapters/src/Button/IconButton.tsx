import React from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';

import type { IconButtonProps } from './types';

type ButtonType = React.ComponentType<IconButtonProps>;

export const IconButton: React.FC<IconButtonProps> = React.forwardRef<ButtonType, IconButtonProps>(
	({ variant = 'unstyled', ...props }, ref) => {
		return <ChakraIconButton {...props} ref={ref} variant={variant} />;
	}
);
