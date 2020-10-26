import type { HeadingProps as ChakraHeadingProps } from '@chakra-ui/layout';

export interface HeadingProps extends Pick<ChakraHeadingProps, 'as' | 'className' | 'id'> {}
