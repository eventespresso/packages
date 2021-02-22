import { Image as ChakraImage } from '@chakra-ui/react';

import type { ImageProps } from './types';

export const Image: React.FC<ImageProps> = (props) => <ChakraImage {...props} />;
