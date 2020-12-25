import { MenuItem as ChakraMenuItem } from '@chakra-ui/react';

import type { MenuItemProps } from './types';

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
	return <ChakraMenuItem {...props}>{children}</ChakraMenuItem>;
};
