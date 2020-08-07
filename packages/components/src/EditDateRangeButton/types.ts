import type { LabelPosition } from '../withLabel';
import type { ButtonProps } from '../Button';

export interface EditDateButtonProps extends ButtonProps {
	endDate: string;
	header?: string;
	onEditHandler: (dates: string[]) => void;
	startDate: string;
	tooltip?: string;
	tooltipPosition?: LabelPosition;
}
