import type { BoxProps } from '@chakra-ui/core';
import type { Size } from '../types';

export interface DividerProps extends Omit<BoxProps, 'aria-orientation' | 'size'>, Size {
	className?: string;
	orientation?: BoxProps['aria-orientation'];
	type?: 'dashed' | 'dotted' | 'solid' | 'none';
}
