import React from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/core';

import type { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = (props) => {
	return <ChakraSpinner {...props} />;
};

export default Spinner;
