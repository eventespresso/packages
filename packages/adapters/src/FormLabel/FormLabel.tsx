import React from 'react';
import { FormLabel as ChakraFormLabel } from '@chakra-ui/react';

import type { FormLabelProps } from './types';

export const FormLabel: React.FC<FormLabelProps> = ({ children, htmlFor }) => {
	return <ChakraFormLabel htmlFor={htmlFor}>{children}</ChakraFormLabel>;
};
