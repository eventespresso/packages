import type { Entity, EntityId } from '@eventespresso/data';
import type { RelationsManager, RelationalData, PossibleRelation } from '@eventespresso/services';
import type { Datetime, Ticket } from '@eventespresso/edtr-services';

export type TAMRelationEntity = 'datetimes' | 'tickets';

export type TAMPossibleRelation = Pick<PossibleRelation<null>, TAMRelationEntity>;

export type TAMRelationalEntity = {
	[key: string]: TAMPossibleRelation;
};

export type TAMRelationalData = Pick<RelationalData, TAMRelationEntity>;

export type AssignmentType = 'forDate' | 'forTicket' | 'forAll';

export type AssignmentStatus = 'OLD' | 'NEW' | 'REMOVED';

export interface BaseProps<E extends Entity = Datetime | Ticket> {
	assignmentType: AssignmentType;
	entity?: E;
	title?: string;
}

export interface AssignmentFnArgs {
	datetimeId: EntityId;
	ticketId: EntityId;
}

export interface SetAssignmentFnArgs extends AssignmentFnArgs {
	remove?: boolean;
}

interface InitializeProps extends BaseProps {
	data: TAMRelationalData;
}

export interface AssignmentManager {
	addAssignment: (args: AssignmentFnArgs) => void;
	getAssignedDates: (args: Pick<AssignmentFnArgs, 'ticketId'>) => EntityId[];
	getAssignedTickets: (args: Pick<AssignmentFnArgs, 'datetimeId'>) => EntityId[];
	getData: RelationsManager['getData'];
	initialize: (props: InitializeProps) => void;
	isInitialized: RelationsManager['isInitialized'];
	removeAssignment: (args: SetAssignmentFnArgs) => void;
	toggleAssignment: (args: AssignmentFnArgs) => void;
}

export interface DataStateManager extends AssignmentManager {
	getAssignmentStatus: (args: AssignmentFnArgs) => AssignmentStatus;
	hasNoAssignedDates: (options: Pick<AssignmentFnArgs, 'ticketId'>) => boolean;
	hasNoAssignedTickets: (options: Pick<AssignmentFnArgs, 'datetimeId'>) => boolean;
	hasOrphanDates: () => boolean;
	hasOrphanEntities: () => boolean;
	hasOrphanTickets: () => boolean;
}

export interface DatesAndTickets {
	datetimes: Datetime[];
	tickets: Ticket[];
}

export type RelationClassName = 'no-assignments' | 'new-assignment' | 'old-assignment' | 'removed-assignment';

export interface RenderTableProps extends DatesAndTickets {}

export interface RenderCellProps {
	datetime?: Datetime;
	ticket?: Ticket;
}
