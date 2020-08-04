import type React from 'react';
import type { withLabelProps, withTooltipProps } from '../../';
import type { ButtonProps as ButtonAdapterProps } from '@eventespresso/adapters';

export type ClickHandler = (click?: React.MouseEvent<HTMLElement>) => void;

export enum ButtonSize {
	TINY = 'tiny',
	SMALL = 'small',
	DEFAULT = 'default',
	BIG = 'big',
	HUGE = 'huge',
}

export enum ButtonType {
	ACCENT = 'accent',
	DEFAULT = 'default',
	MINIMAL = 'minimal',
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

export interface ButtonProps extends ButtonAdapterProps, Partial<withLabelProps>, Partial<withTooltipProps> {
	active?: boolean;
	buttonType?: ButtonType | 'accent' | 'default' | 'minimal' | 'primary' | 'secondary';
	buttonSize?: ButtonSize;
	noMargin?: boolean;
	noHorizontalMargin?: boolean;
}

export interface LinkProps extends Partial<withTooltipProps> {
	className?: string;
	external?: boolean;
	href?: string;
	icon?: React.ReactNode;
}
