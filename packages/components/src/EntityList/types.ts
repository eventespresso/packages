import type React from 'react';
import type { BodyRow, HeaderRow, RowType, TableRow, LegendConfig, ResponsiveTableProps } from '../..';
import type { Entity, EntityId } from '@eventespresso/data';
import type { EntityListFilterStateManager } from '@eventespresso/services';
import type { TypeName } from '@eventespresso/services';

type ELFSM = EntityListFilterStateManager<any>;

export interface EntityListBaseProps<E extends Entity> {
	entities: Array<E>;
}

export interface EntityCardListProps<E extends Entity> extends EntityListBaseProps<E> {
	EntityCard: React.ComponentType<EntityListItemProps<E>>;
}

/**
 * This common type can be used/extended by many UI components
 */
export interface EntityListItemProps<E extends Entity = Entity> {
	entity?: E;
	id?: EntityId;
}

export interface EntityListViewProps<E extends Entity, FS extends ELFSM> extends EntityListBaseProps<E> {
	className?: string;
	filterState: FS;
}

interface BodyRowGeneratorFnProps<E extends Entity, FS extends ELFSM> {
	entity: E;
	filterState: FS;
}
export type BodyRowGeneratorFn<E extends Entity, FS extends ELFSM> = (props: BodyRowGeneratorFnProps<E, FS>) => BodyRow;
export type HeaderRowGeneratorFn<FS extends ELFSM> = (filerState: FS) => HeaderRow;

export interface EntityTableProps<E extends Entity, FS extends ELFSM> extends EntityListViewProps<E, FS> {
	bodyRowGenerator: BodyRowGeneratorFn<E, FS>;
	domain: string;
	headerRowGenerator: HeaderRowGeneratorFn<FS>;
	listId: string;
	onSort?: ResponsiveTableProps['onDragEnd'];
	tableCaption?: string;
	tableId?: string;
}

export type EntityListComponent<E extends Entity, FS extends ELFSM> = React.ComponentType<EntityListViewProps<E, FS>>;

export interface EntityListProps<E extends Entity, FS extends ELFSM> extends Partial<EntityListViewProps<E, FS>> {
	activeFilters?: React.ReactNode;
	domain: string;
	entityType: TypeName;
	footer: React.ReactNode;
	headerText: string;
	legendConfig: LegendConfig;
	listId: string;
	loadingText?: string;
	noResultsDesc?: string;
	noResultsTitle?: string;
	renderList?: () => React.ReactNode;
}

export type EntityTableFiltersHook = <D extends string, L extends string, FS extends ELFSM, E extends Entity>(
	domain: D,
	listId: L
) => EntityTableFilters<FS, E>;

export interface EntityTableFilters<FS extends ELFSM, E extends Entity> {
	applyFilters: (row: TableRow, filterState: FS, type: RowType, entity?: E) => TableRow;
}
