import { forwardRef } from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';

import type { IconButtonProps } from './types';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ variant = 'unstyled', icon: Icon, ...props }, ref) => {
		return <ChakraIconButton {...props} icon={<Icon />} ref={ref} variant={variant} />;
	}
);
