import React from 'react';
import { ButtonGroup as ChakraButtonGroup } from '@chakra-ui/core';

import type { ButtonGroupProps } from './types';

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
	return <ChakraButtonGroup {...props} />;
};
