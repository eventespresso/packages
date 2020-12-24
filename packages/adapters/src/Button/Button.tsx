import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import type { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, buttonText, icon: Icon, ...props }, ref) => {
		const leftIcon = Icon && <Icon />;
		const text = children || buttonText;

		return (
			<ChakraButton {...props} leftIcon={leftIcon} ref={ref}>
				{text && <span>{text}</span>}
			</ChakraButton>
		);
	}
);
