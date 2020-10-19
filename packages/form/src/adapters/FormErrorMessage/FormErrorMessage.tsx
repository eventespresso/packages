import React from 'react';
import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui/core';

import type { FormErrorMessageProps } from './types';

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ children, className, id, ...props }) => (
	<ChakraFormErrorMessage aria-live={props['aria-live']} className={className} id={id}>
		{children}
	</ChakraFormErrorMessage>
);
