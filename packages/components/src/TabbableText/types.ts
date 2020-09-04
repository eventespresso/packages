export interface TabbableTextProps {
	className?: string;
	icon?: React.ReactNode;
	onClick: VoidFunction;
	text?: string | JSX.Element;
	tooltip?: string;
}
