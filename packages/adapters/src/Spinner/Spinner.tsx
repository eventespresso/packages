import React from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/core';

import type { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = (props) => {
	return <ChakraSpinner {...props} />;
};
