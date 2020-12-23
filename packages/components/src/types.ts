import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

export interface CalendarDateProps {
	editButton?: EditButtonProps;
	className?: string;
	headerText?: string | React.ReactNode;
	footerText?: string | React.ReactNode;
	onEdit?: clickHandler | keyPressHandler;
	showTime?: boolean;
}

export type Color = 'dark-green' | 'blue-green' | 'blue';

export type ColorContrast = 'super-high' | 'high' | 'low' | 'super-low';

export interface Colors {
	color: Color;
	colorContrast: ColorContrast;
}

export type clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
export type keyPressHandler = (event: React.KeyboardEventHandler<HTMLButtonElement>) => void;

export interface EditButtonProps {
	tooltip: string;
	tooltipPosition: string;
}

export type ForwardRefComponent<P, C> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<C>>;

export interface Size {
	size?: 'micro' | 'tiny' | 'small' | 'smaller' | 'default' | 'big' | 'huge';
}
