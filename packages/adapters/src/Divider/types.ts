import type { BoxProps } from '@chakra-ui/core';

export interface DividerProps extends Omit<BoxProps, 'aria-orientation'> {
	type?: 'dashed' | 'dotted' | 'solid' | 'none';
	orientation?: BoxProps['aria-orientation'];
}
