import React from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

import type { SpinnerProps } from './types';

export const Spinner: React.FC<SpinnerProps> = (props) => {
	return <ChakraSpinner {...props} />;
};
