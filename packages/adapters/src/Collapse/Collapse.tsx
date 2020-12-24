import React from 'react';
import { Collapse as ChakraCollapse } from '@chakra-ui/react';

import type { CollapseProps } from './types';

export const Collapse: React.FC<CollapseProps> = ({ children, isOpen }) => (
	<ChakraCollapse in={isOpen}>{children}</ChakraCollapse>
);
