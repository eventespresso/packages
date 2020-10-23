import type { BoxProps } from '@chakra-ui/core';

export interface DividerProps extends Omit<BoxProps, 'aria-orientation'> {
	className?: string;
	orientation?: BoxProps['aria-orientation'];
	size?: 'tiny' | 'small' | 'smaller' | 'default' | 'big' | 'huge';
	type?: 'dashed' | 'dotted' | 'solid' | 'none';
}
