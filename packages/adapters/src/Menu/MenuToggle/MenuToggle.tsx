import { forwardRef } from 'react';
import { MenuButton as ChakraMenuButton } from '@chakra-ui/react';

import type { MenuToggleProps } from './types';

const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(({ children, ...props }, ref) => {
	return (
		<ChakraMenuButton {...props} ref={ref}>
			{children}
		</ChakraMenuButton>
	);
});

export default MenuToggle;
