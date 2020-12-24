import React from 'react';
import { __ } from '@eventespresso/i18n';

import { useFilterBarUIElements } from '@eventespresso/registry';
import type { EntityListFilterStateManager as ELFSM } from '@eventespresso/services';
import {
	SearchInput,
	EntityListFilterBar as EntityListFilterBarUI,
	ToggleSortingButton,
	EntityListViewButtonGroup,
} from '@eventespresso/components';

import type { EntityListFilterBarProps } from './types';

/**
 * EntityListFilterBar
 * a group of inputs for controlling how a list of entities is displayed
 */
export const EntityListFilterBar = <FS extends ELFSM>({
	domain,
	filterState,
	listId,
}: EntityListFilterBarProps<FS>): JSX.Element => {
	const { searchText, setCardView, setTableView, setSearchText, sortingEnabled, toggleSorting, view } = filterState;

	const filerBarItems = useFilterBarUIElements({ domain, filterState, listId });

	const searchId = `ee-search-input-${listId}`;

	const mainButtons = (
		<>
			<EntityListViewButtonGroup id={listId} setCardView={setCardView} setTableView={setTableView} view={view} />

			<ToggleSortingButton id={listId} value={sortingEnabled} onClick={toggleSorting} />
		</>
	);

	const collapsibleButtons = (
		<>
			{filerBarItems}
			<div className='ee-filter-bar__filter'>
				<SearchInput
					className='ee-entity-list-filter-bar-search'
					id={searchId}
					label={__('search')}
					searchText={searchText}
					setSearchText={setSearchText}
				/>
			</div>
		</>
	);

	return (
		<EntityListFilterBarUI
			collapsibleButtons={collapsibleButtons}
			disableFilters={sortingEnabled}
			id={listId}
			mainButtons={mainButtons}
		/>
	);
};
