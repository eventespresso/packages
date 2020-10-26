import React from 'react';
import { Icon as ChakraIcon } from '@chakra-ui/icon';

import type { IconProps } from './types';

export const Icon: React.FC<IconProps> = (props) => <ChakraIcon {...props} />;
