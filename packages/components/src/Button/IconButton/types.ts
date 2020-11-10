import type { Size, withLabelProps, withTooltipProps } from '../../../';
import type { ButtonType } from '../types';
import type { IconButtonProps as IconButtonAdapterProps } from '@eventespresso/adapters';

export interface IconButtonProps
	extends Size,
		Omit<IconButtonAdapterProps, 'aria-label' | 'size'>,
		Partial<withLabelProps>,
		Partial<withTooltipProps> {
	'aria-label'?: string;
	borderless?: boolean;
	buttonType?: ButtonType;
	color?: 'white' | 'black';
	noMargin?: boolean;
}
