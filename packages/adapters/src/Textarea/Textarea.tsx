import React from 'react';
import { Textarea as ChakraTextarea } from '@chakra-ui/textarea';

import type { TextareaProps } from './types';

export const Textarea: React.FC<TextareaProps> = (props) => {
	return <ChakraTextarea {...props} variant='unstyled' />;
};
