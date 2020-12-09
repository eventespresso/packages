import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';

import type { ButtonProps } from './types';

type ButtonType = React.ComponentType<ButtonProps>;

export const Button = React.forwardRef<ButtonType, ButtonProps>(({ children, buttonText, icon, ...props }, ref) => {
	const leftIcon = icon && icon;
	const text = children || buttonText;

	return (
		<ChakraButton {...props} leftIcon={leftIcon} ref={ref}>
			{text && <span>{text}</span>}
		</ChakraButton>
	);
});
