import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import type { ButtonProps } from './types';

type ButtonType = React.ComponentType<ButtonProps>;

export const Button = React.forwardRef<ButtonType, ButtonProps>(({ children, buttonText, icon, ...props }, ref) => {
	const text = children || buttonText;

	return (
		<ChakraButton {...props} leftIcon={icon} ref={ref}>
			{text && <span>{text}</span>}
		</ChakraButton>
	);
});
