import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { LabelPosition } from '../';

export interface CalendarBaseProps {
	formatFn?: (date: Date, formatStr: string) => string;
}

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
	tooltipPosition: LabelPosition;
}

export type ForwardRefComponent<P, C> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<C>>;

export interface Size {
	size?: 'nano' | 'micro' | 'tiny' | 'smaller' | 'small' | 'default' | 'big' | 'bigger' | 'huge';
}
