import React from 'react';
import { Collapse as ChakraCollapse } from '@chakra-ui/core';

import type { CollapseProps } from './types';

export const Collapse: React.FC<CollapseProps> = ({ children, isOpen }) => (
	<ChakraCollapse isOpen={isOpen}>{children}</ChakraCollapse>
);
