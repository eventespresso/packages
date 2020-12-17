import type { Size } from '../../';

export interface GridItemProps extends Size {
	className?: string;
	id: string;
	input: JSX.Element;
	label: string;
}
