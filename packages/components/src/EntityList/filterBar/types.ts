import type { EntityListFilterStateManager as ELFSM, View } from '@eventespresso/services';
import type { IconButtonProps, LegendConfig } from '../../..';

export interface CardViewFilterButtonProps extends View, CommonProps, IconButtonProps {
	setCardView: VoidFunction;
}

interface CommonProps {
	listId?: string;
}

export interface EntityListFilterBarProps<FS extends ELFSM> extends CommonProps {
	domain: string;
	filterState: FS;
	legendConfig: LegendConfig<string>;
}

export interface EntityListViewButtonGroupProps extends CardViewFilterButtonProps, TableViewFilterButtonProps {}

export interface TableViewFilterButtonProps extends View, CommonProps, IconButtonProps {
	setTableView: () => void;
}

export interface ToggleFiltersButtonProps extends CommonProps, IconButtonProps {
	showFilters?: boolean;
	toggleFilters: VoidFunction;
}

export interface ToggleSortingButtonProps extends CommonProps, IconButtonProps {
	sortingEnabled?: boolean;
	toggleSorting: VoidFunction;
}
