import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';

import type { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, buttonText, icon, ...props }, ref) => {
		const leftIcon = icon && icon;
		const text = children || buttonText;

		return (
			<ChakraButton {...props} leftIcon={leftIcon} ref={ref}>
				{text && <span>{text}</span>}
			</ChakraButton>
		);
	}
);
