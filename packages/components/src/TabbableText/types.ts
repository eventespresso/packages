export interface TabbableTextProps {
	className?: string;
	icon?: React.ReactNode;
	onClick: VoidFunction;
	richTextContent?: boolean;
	text?: string | JSX.Element;
	tooltip?: string;
}
