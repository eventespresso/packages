import type { RadioProps as ChakraRadioProps } from '@chakra-ui/core';

export interface RadioProps extends Pick<ChakraRadioProps, 'key' | 'value'> {}
