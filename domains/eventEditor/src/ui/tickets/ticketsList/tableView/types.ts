import { DisplayStartOrEndDate } from '@eventespresso/edtr-services';
import { Entity } from '@eventespresso/data';

export interface TableViewProps {
	className?: string;
	displayStartOrEndDate: DisplayStartOrEndDate;
	entities: Entity[];
}
