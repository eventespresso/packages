import React from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

import type { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
	return <ChakraCheckbox {...props}>{label}</ChakraCheckbox>;
};
