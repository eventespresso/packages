import type { Size } from '../../../';
import type { ButtonType } from '../types';
import type { IconButtonProps as IconButtonAdapterProps } from '@eventespresso/adapters';

export interface IconButtonProps extends Size, Omit<IconButtonAdapterProps, 'aria-label' | 'size'> {
	'aria-label'?: string;
	borderless?: boolean;
	buttonType?: ButtonType;
	color?: 'white' | 'black';
	noMargin?: boolean;
	transparentBg?: boolean;
}
