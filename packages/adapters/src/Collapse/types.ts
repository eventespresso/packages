import type { CollapseProps as ChakraCollapseProps } from '@chakra-ui/core';

export interface CollapseProps extends Pick<ChakraCollapseProps, 'isOpen'> {}
