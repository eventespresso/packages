import { MenuList as ChakraMenuList } from '@chakra-ui/react';

import type { MenuListProps } from './types';

const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
	return <ChakraMenuList {...props}>{children}</ChakraMenuList>;
};

export default MenuList;
