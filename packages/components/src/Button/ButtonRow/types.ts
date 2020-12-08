import * as CSS from 'csstype';

export interface ButtonRowProps {
	alignItems?: CSS.Property.AlignItems;
	className?: string;
	fullWidth?: boolean;
	horizontalAlign?: 'center' | 'left' | 'right';
	justifyContent?: CSS.Property.JustifyContent;
	noMargin?: boolean;
	topBordered?: boolean;
}
