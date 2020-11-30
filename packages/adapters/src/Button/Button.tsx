import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';

import type { ButtonProps } from './types';

type ButtonType = React.ComponentType<ButtonProps>;

export const Button = React.forwardRef<ButtonType, ButtonProps>(
	({ children, disabled, buttonText, icon, ...props }, ref) => {
		const text = children || buttonText;

		return (
			<ChakraButton {...props} isDisabled={disabled} leftIcon={icon} ref={ref}>
				{text && <span>{text}</span>}
			</ChakraButton>
		);
	}
);
