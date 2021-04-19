import type { DisplayStartOrEndDate } from '@eventespresso/edtr-services';
import type { Entity } from '@eventespresso/data';

export interface TableViewProps {
	className?: string;
	displayStartOrEndDate: DisplayStartOrEndDate;
	entities: Entity[];
}
