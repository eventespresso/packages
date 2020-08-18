import type { DateRange } from '@eventespresso/adapters';
import type { LabelPosition } from '../withLabel';
import type { ButtonProps } from '../Button';

export interface EditDateButtonProps extends ButtonProps {
	endDate: string; // ISO string
	header?: string;
	onEditHandler: (dates: DateRange) => void;
	startDate: string; // ISO string
	tooltip?: string;
	tooltipPosition?: LabelPosition;
}
