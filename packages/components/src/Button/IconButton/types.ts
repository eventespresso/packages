import type { ButtonSize, ButtonType } from '../types';
import type { withLabelProps, withTooltipProps } from '../../../';
import type { IconButtonProps as IconButtonAdapterProps } from '@eventespresso/adapters';

export interface IconButtonProps
	extends Omit<IconButtonAdapterProps, 'aria-label'>,
		Partial<withLabelProps>,
		Partial<withTooltipProps> {
	'aria-label'?: string;
	borderless?: boolean;
	buttonType?: ButtonType;
	buttonSize?: ButtonSize;
	color?: 'white' | 'black';
}
