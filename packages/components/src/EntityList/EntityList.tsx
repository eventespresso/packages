import React from 'react';
import { __ } from '@eventespresso/i18n';

import { useStatus } from '@eventespresso/services';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { Divider, EmptyState, ErrorIndicator, Heading, LoadingNotice } from '../..';
import EntityListFilterBar from './withValidFilterState';
import { EntityPagination } from './pagination';
import type { EntityListProps } from './types';
import './style.scss';

const EntityList = <ELFS extends EntityListFilterStateManager<any>>({
	activeFilters,
	domain,
	entityType,
	filterState,
	footer,
	headerText,
	legendConfig,
	listId,
	noResultsDesc,
	noResultsTitle,
	renderList,
}: EntityListProps<ELFS>): JSX.Element => {
	const { isError, isLoading } = useStatus();
	const error = isError(entityType);
	const loading = isLoading(entityType);

	if (loading) return <LoadingNotice />;

	if (error) return <ErrorIndicator />;

	let entityList: React.ReactNode;

	if (filterState.total === 0) {
		const title = noResultsTitle ? noResultsTitle : __('no results found');
		const description = noResultsDesc ? noResultsDesc : __('try changing filter settings');
		entityList = <EmptyState description={description} title={title} />;
	} else {
		entityList = renderList();
	}

	return (
		<div className={'ee-entity-list'}>
			<Heading as='h3' className='ee-entity-list__header'>
				{headerText}
			</Heading>
			<EntityListFilterBar
				domain={domain}
				filterState={filterState}
				legendConfig={legendConfig}
				listId={listId}
			/>
			{activeFilters}
			{entityList}
			{
				// disable pogination when sorting
				!filterState.sortingEnabled && <EntityPagination filterState={filterState} />
			}
			<div className={'ee-entity-list__footer'}>{footer}</div>
			<Divider type='dashed' />
		</div>
	);
};

export default EntityList;
