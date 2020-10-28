import React from 'react';
import { MenuItem as ChakraMenuItem } from '@chakra-ui/core';

import type { MenuItemProps } from './types';

export const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => {
	return <ChakraMenuItem {...props}>{children}</ChakraMenuItem>;
};
