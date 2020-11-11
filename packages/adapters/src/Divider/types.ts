import type { BoxProps } from '@chakra-ui/core';

export interface DividerProps extends Omit<BoxProps, 'aria-orientation'> {
	className?: string;
	orientation?: BoxProps['aria-orientation'];
	type?: 'dashed' | 'dotted' | 'solid' | 'none';
}
