import React, { useEffect, useState, useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Collapsible, Legend, SearchInput, ToggleLegendButton } from '../../..';
import ToggleFiltersButton from './buttons/ToggleFiltersButton';
import ToggleSortingButton from './buttons/ToggleSortingButton';
import EntityListViewButtonGroup from './buttons/EntityListViewButtonGroup';
import { useFilterBarUIElements } from '@eventespresso/registry';
import { EntityListFilterStateManager as ELFSM } from './filterState';
import type { EntityListFilterBarProps } from './types';

import './style.scss';

/**
 * EntityListFilterBar
 * a group of inputs for controlling how a list of entities is displayed
 */
const EntityListFilterBar = <FS extends ELFSM>({
	domain,
	filterState,
	legendConfig,
	listId,
}: EntityListFilterBarProps<FS>): JSX.Element => {
	const [showLegend, setShowLegend] = useState(false);
	const toggleLegend = useCallback(() => setShowLegend((v) => !v), []);

	const [showEntityFilters, setShowEntityFilters] = useState(false);
	const toggleEntityFilters = useCallback(() => setShowEntityFilters((v) => !v), []);

	const { searchText, setCardView, setTableView, setSearchText, sortingEnabled, toggleSorting, view } = filterState;

	const filerBarItems = useFilterBarUIElements({ domain, filterState, listId });

	const searchId = `ee-search-input-${listId}`;

	useEffect(() => {
		if (sortingEnabled) {
			setShowEntityFilters(false);
			setShowLegend(false);
		}
	}, [sortingEnabled]);

	return (
		<div className='ee-filter-bar'>
			<div className='ee-filter-bar__main'>
				<EntityListViewButtonGroup
					listId={listId}
					setCardView={setCardView}
					setTableView={setTableView}
					view={view}
				/>
				<ToggleFiltersButton
					listId={listId}
					showFilters={showEntityFilters}
					toggleFilters={toggleEntityFilters}
					isDisabled={sortingEnabled}
				/>
				<ToggleSortingButton listId={listId} sortingEnabled={sortingEnabled} toggleSorting={toggleSorting} />
				<ToggleLegendButton
					className='ee-filter-bar__btn ee-btn--small'
					isDisabled={sortingEnabled}
					showLegend={showLegend}
					toggleLegend={toggleLegend}
				/>
			</div>

			<Collapsible className='ee-filter-bar__collapsible' show={showEntityFilters}>
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
			</Collapsible>

			<Collapsible className='ee-filter-bar__collapsible' show={showLegend}>
				<Legend legendConfig={legendConfig} />
			</Collapsible>
		</div>
	);
};

export default EntityListFilterBar;
