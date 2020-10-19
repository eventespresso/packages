import React from 'react';
import { Box as ChakraBox } from '@chakra-ui/core';

import type { BoxProps } from './types';

export const Box: React.FC<BoxProps> = (props) => <ChakraBox {...props} />;
