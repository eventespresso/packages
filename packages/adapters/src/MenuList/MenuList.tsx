import React from 'react';
import { MenuList as ChakraMenuList } from '@chakra-ui/core';

import type { MenuListProps } from './types';

export const MenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
	return <ChakraMenuList {...props}>{children}</ChakraMenuList>;
};
