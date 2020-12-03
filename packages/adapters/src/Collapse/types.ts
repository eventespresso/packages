import type { CollapseProps as ChakraCollapseProps } from '@chakra-ui/react';

export interface CollapseProps extends Pick<ChakraCollapseProps, 'isOpen'> {}
