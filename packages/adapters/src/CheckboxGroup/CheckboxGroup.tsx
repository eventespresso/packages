import React from 'react';
import { CheckboxGroup as ChakraCheckboxGroup } from '@chakra-ui/react';

import type { CheckboxGroupProps } from './types';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ children, ...props }) => {
	return <ChakraCheckboxGroup {...props}>{children}</ChakraCheckboxGroup>;
};
