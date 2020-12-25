export interface TabbableTextProps {
	'aria-describedby'?: string;
	className?: string;
	icon?: React.ReactNode;
	isDisabled?: boolean;
	onClick: VoidFunction;
	text?: string | JSX.Element;
	tooltip?: string;
}
