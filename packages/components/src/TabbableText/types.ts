export interface TabbableTextProps {
	className?: string;
	icon?: React.ReactNode;
	bottomBorderDashed?: boolean;
	onClick: VoidFunction;
	richTextContent?: boolean;
	text?: string | JSX.Element;
	tooltip?: string;
}
