import type { EntityQueryArgs } from '../types';
import type { EntityEdge } from '../../types';

export interface RecurrencesQueryWhereArgs {
  datetime?: string;
  datetimeId?: number;
  datetimeIdIn?: Array<number>;
  datetimeIn?: Array<string>;
}

export type RecurrencesQueryArgs = EntityQueryArgs<RecurrencesQueryWhereArgs>;

export interface RecurrencesList<Edge extends EntityEdge> {
  espressoRecurrences: Edge;
}
