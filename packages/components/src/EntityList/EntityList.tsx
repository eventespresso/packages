import React from 'react';
import { __ } from '@eventespresso/i18n';

import { useStatus } from '@eventespresso/services';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import {
	ButtonRow,
	CollapsibleLegend,
	Divider,
	EmptyState,
	ErrorIndicator,
	Heading,
	LoadingNotice,
	Pagination,
} from '../..';
import EntityListFilterBar from './withValidFilterState';
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
			<EntityListFilterBar domain={domain} filterState={filterState} listId={listId} />
			{activeFilters}
			{entityList}
			<ButtonRow alignItems='center' justifyContent='space-between'>
				<CollapsibleLegend columnsPerRow={1} direction='row' legendConfig={legendConfig} termWhiteBg />
				{
					// disable pogination when sorting
					!filterState.sortingEnabled && (
						<Pagination
							alignment='right'
							defaultPerPage={6}
							onChangePageNumber={filterState.setPageNumber}
							onChangePerPage={filterState.setPerPage}
							pageNumber={filterState.pageNumber}
							perPage={filterState.perPage}
							showPerPageChanger
							total={filterState.total}
						/>
					)
				}
			</ButtonRow>
			<div className={'ee-entity-list__footer'}>{footer}</div>
			<Divider type='dashed' />
		</div>
	);
};

export default EntityList;
