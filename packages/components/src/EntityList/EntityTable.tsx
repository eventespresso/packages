import React, { useMemo } from 'react';
import classNames from 'classnames';

import { useMemoStringify } from '@eventespresso/hooks';
import { Entity } from '@eventespresso/data';
import type { EntityListFilterStateManager } from '@eventespresso/services';

import { ResponsiveTable } from '../..';
import type { EntityTableProps } from './types';

type ELFSM = EntityListFilterStateManager<any>;

const EntityTable = <E extends Entity, FS extends ELFSM>({
	bodyRowGenerator,
	entities,
	filterState,
	headerRowGenerator,
	onSort,
	tableCaption,
	tableId,
	...props
}: EntityTableProps<E, FS>): JSX.Element => {
	const bodyRows = useMemo(() => entities.map((entity) => bodyRowGenerator({ entity, filterState })), [
		bodyRowGenerator,
		entities,
		filterState,
	]);
	const headerRows = useMemo(() => {
		const headerRow = headerRowGenerator(filterState);
		return [headerRow];
	}, [filterState, headerRowGenerator]);

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
