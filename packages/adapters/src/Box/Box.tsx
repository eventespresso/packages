import { Box as ChakraBox } from '@chakra-ui/react';

import type { BoxProps } from './types';

export const Box: React.FC<BoxProps> = (props) => <ChakraBox {...props} />;
