export interface ItemCountProps {
	children: React.ReactNode;
	className?: string;
	/** Number to show in badge */
	count?: React.ReactNode;
	emphasizeZero?: boolean;
	offset?: [number | string, number | string];
	title?: string;
	zeroCountChar?: string | JSX.Element;
}
