import React from 'react';
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/core';

import type { RadioGroupProps } from './types';

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, ...props }) => {
	return <ChakraRadioGroup {...props}>{children}</ChakraRadioGroup>;
};
