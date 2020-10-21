export interface TabbableTextProps {
	className?: string;
	icon?: React.ReactNode;
	isDisabled?: boolean;
	onClick: VoidFunction;
	text?: string | JSX.Element;
	tooltip?: string;
}
