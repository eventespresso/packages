// ordered clockwise starting top left
export type LabelPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'right-top'
	| 'right-middle'
	| 'right-bottom'
	| 'bottom-right'
	| 'bottom-center'
	| 'bottom-left'
	| 'left-bottom'
	| 'left-middle'
	| 'left-top';

export interface WithLabelProps {
	fontWeightNormal?: boolean;
	id?: string;
	label?: string;
	labelClassName?: string;
	labelPosition?: LabelPosition;
	noPadding?: boolean;
}
