import type { RadioProps as ChakraRadioProps } from '@chakra-ui/react';

export interface RadioProps extends Pick<ChakraRadioProps, 'key' | 'value'> {}
