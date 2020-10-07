import React from 'react';
import { Alert as ChakraAlert, AlertIcon } from '@chakra-ui/core';

import type { AlertProps } from './types';

const Alert: React.FC<AlertProps> = ({ description, ...props }) => (
	<ChakraAlert {...props}>
		<AlertIcon />
		{description}
	</ChakraAlert>
);

export default Alert;
