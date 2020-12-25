import { __ } from '@eventespresso/i18n';

import { useStatus } from '@eventespresso/services';
import type { EntityListFilterStateManager } from '@eventespresso/services';
import { CollapsibleLegend, EmptyState, Pagination, EntityList as EntityListUI } from '@eventespresso/ui-components';

import EntityListFilterBar from './withValidFilterState';
import type { EntityListProps } from './types';

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

	let entityList: React.ReactNode;

	if (filterState.total === 0) {
		const title = noResultsTitle ? noResultsTitle : __('no results found');
		const description = noResultsDesc ? noResultsDesc : __('try changing filter settings');
		entityList = <EmptyState description={description} title={title} />;
	} else {
		entityList = renderList();
	}

	const filterBar = <EntityListFilterBar domain={domain} filterState={filterState} listId={listId} />;

	const legend = <CollapsibleLegend direction='row' legendConfig={legendConfig} termWhiteBg />;

	const pagination = !filterState.sortingEnabled && ( // disable pogination when sorting
		<Pagination
			className='ee-entity-list__pagination'
			defaultPerPage={6}
			onChangePageNumber={filterState.setPageNumber}
			onChangePerPage={filterState.setPerPage}
			pageNumber={filterState.pageNumber}
			perPage={filterState.perPage}
			showPerPageChanger
			total={filterState.total}
		/>
	);

	return (
		<EntityListUI
			activeFilters={activeFilters}
			entityList={entityList}
			error={error}
			filterBar={filterBar}
			footer={footer}
			headerText={headerText}
			legend={legend}
			loading={loading}
			pagination={pagination}
		/>
	);
};

export default EntityList;
