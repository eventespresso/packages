import React from 'react';
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/core';

import type { FormHelperTextProps } from './types';

export const FormHelperText: React.FC<FormHelperTextProps> = ({ children, className, id }) => (
	<ChakraFormHelperText className={className} id={id}>
		{children}
	</ChakraFormHelperText>
);
