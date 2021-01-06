import type { IconButtonProps, ListView } from '../../..';

export interface FilterButtonBaseProps extends IconButtonProps {
	id?: string;
	value?: any;
}

export interface CardViewFilterButtonProps extends ListView, FilterButtonBaseProps {}

export interface TableViewFilterButtonProps extends ListView, FilterButtonBaseProps {}

export interface EntityListViewButtonGroupProps extends CardViewFilterButtonProps, TableViewFilterButtonProps {
	setTableView: VoidFunction;
	setCardView: VoidFunction;
}

export interface ToggleFiltersButtonProps extends FilterButtonBaseProps {}
