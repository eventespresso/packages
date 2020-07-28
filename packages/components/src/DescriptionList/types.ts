export interface DescriptionListItemProps {
	className: string;
	description: string;
	term?: React.ReactNode;
}

export interface DescriptionListProps {
	direction?: 'row';
	dataSource: DescriptionListItemProps[];
}
