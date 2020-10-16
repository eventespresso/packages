import React, { useMemo } from 'react';
import classNames from 'classnames';

import { useMemoStringify } from '@eventespresso/hooks';
import { Entity } from '@eventespresso/data';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { ResponsiveTable } from '../..';
import type { EntityTableProps } from './types';
import useEntityTableFilters from './useEntityTableFilters';
import { RowType, BodyRow, HeaderRow } from '../EspressoTable';

type ELFSM = EntityListFilterStateManager<any>;

const EntityTable = <E extends Entity, FS extends ELFSM>({
	bodyRowGenerator,
	domain,
	entities,
	filterState,
	headerRowGenerator,
	listId,
	onSort,
	tableCaption,
	tableId,
	...props
}: EntityTableProps<E, FS>): JSX.Element => {
	const { applyFilters } = useEntityTableFilters(domain, listId);

	const bodyRows = useMemo(() => {
		return entities.map((entity) => {
			const bodyRow = bodyRowGenerator({ entity, filterState });

			return applyFilters(bodyRow, filterState, RowType.body, entity) as BodyRow;
		});
	}, [applyFilters, bodyRowGenerator, entities, filterState]);

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

	return (
		<ResponsiveTable
			bodyRows={bodyRows}
			className={className}
			headerRows={headerRows}
			metaData={metaData}
			onDragEnd={onDragEnd}
		/>
	);
};

export default EntityTable;
