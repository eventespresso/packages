import { forwardRef } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import type { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, buttonText, icon: Icon, ...props }, ref) => {
		const leftIcon = Icon && <Icon />;
		const text = children || buttonText;

		return (
			<ChakraButton leftIcon={leftIcon} {...props} ref={ref}>
				{text && <span className='btn-text'>{text}</span>}
			</ChakraButton>
		);
	}
);
