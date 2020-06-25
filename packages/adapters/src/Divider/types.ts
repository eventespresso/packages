import type { BoxProps } from '@chakra-ui/core';

export interface DividerProps extends Omit<BoxProps, 'aria-orientation'> {
  dashed?: boolean;
  orientation?: BoxProps['aria-orientation'];
}
