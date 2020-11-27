import React, { useMemo } from 'react';
import classNames from 'classnames';

import { useMemoStringify } from '@eventespresso/hooks';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { ResponsiveTable } from '../..';
import type { EntityTableProps } from './types';
import useEntityTableFilters from './useEntityTableFilters';
import { RowType, BodyRow, HeaderRow } from '../EspressoTable';

type ELFSM = EntityListFilterStateManager<any>;

const EntityTable = <FS extends ELFSM>({
	bodyRowGenerator,
	domain,
	entityIds,
	filterState,
	headerRowGenerator,
	listId,
	onSort,
	tableCaption,
	tableId,
	...props
}: EntityTableProps<FS>): JSX.Element => {
	const { applyFilters } = useEntityTableFilters(domain, listId);

	const bodyRows = useMemo(() => {
		return entityIds.map((entityId) => {
			const bodyRow = bodyRowGenerator({ entityId, filterState });

			return applyFilters(bodyRow, filterState, RowType.body, entityId) as BodyRow;
		});
	}, [applyFilters, bodyRowGenerator, entityIds, filterState]);

	const headerRows = useMemo(() => {
		const headerRow = headerRowGenerator(filterState);

		const filteredHeaderRow = applyFilters(headerRow, filterState, RowType.header) as HeaderRow;
		return [filteredHeaderRow];
	}, [applyFilters, filterState, headerRowGenerator]);

	const className = useMemoStringify({ tableClassName: classNames(props.className, 'ee-entity-table') }, [
		props.className,
	]);

	const metaData = useMemoStringify({
		tableId,
		tableCaption,
	});
	const onDragEnd = filterState.sortingEnabled ? onSort : null;
	// key to make sure the list is refreshed after optimistic responses
	const key = entityIds.join(':');

	return (
		<ResponsiveTable
			bodyRows={bodyRows}
			className={className}
			headerRows={headerRows}
			key={key}
			metaData={metaData}
			onDragEnd={onDragEnd}
		/>
	);
};

export default EntityTable;
