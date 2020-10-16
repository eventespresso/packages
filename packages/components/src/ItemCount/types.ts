import type { BadgeProps } from '@eventespresso/adapters';

export interface ItemCountProps extends BadgeProps {
	children: React.ReactNode;
	/** Number to show in badge */
	count?: React.ReactNode;
	emphasizeZero?: boolean;
	offset?: [number | string, number | string];
	title?: string;
	zeroCountChar?: string | JSX.Element;
}
