import React from 'react';
import { FormControl as ChakraFormControl } from '@chakra-ui/core';

import type { FormControlProps } from './types';

export const FormControl: React.FC<FormControlProps> = ({ children, className, isInvalid, isRequired }) => (
	<ChakraFormControl className={className} isInvalid={isInvalid} isRequired={isRequired}>
		{children}
	</ChakraFormControl>
);
