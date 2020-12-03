import React from 'react';
import { MenuButton as ChakraMenuButton } from '@chakra-ui/react';

import type { MenuToggleProps } from './types';

const MenuToggle = React.forwardRef<typeof ChakraMenuButton, MenuToggleProps>(
	({ children, variant = 'unstyled', ...props }, ref) => {
		return (
			<ChakraMenuButton
				{...props}
				// @ts-ignore
				variant={variant}
				ref={ref}
			>
				{children}
			</ChakraMenuButton>
		);
	}
);

export default MenuToggle;
