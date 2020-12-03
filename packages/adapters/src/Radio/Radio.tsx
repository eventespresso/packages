import React from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/react';

import type { RadioProps } from './types';

export const Radio: React.FC<RadioProps> = (props) => {
	return <ChakraRadio {...props} />;
};
