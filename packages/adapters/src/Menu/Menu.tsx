import { Menu as ChakraMenu } from '@chakra-ui/react';

import type { MenuProps } from './types';

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
	return <ChakraMenu {...props}>{children}</ChakraMenu>;
};
