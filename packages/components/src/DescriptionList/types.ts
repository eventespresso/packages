import { LegendBaseProps } from '../index';

export interface DescriptionListItemProps {
	bgClassName?: string;
	className: string;
	description: string;
	term?: React.ReactNode;
}

export interface DescriptionListProps extends LegendBaseProps {
	dataSource: DescriptionListItemProps[];
}
