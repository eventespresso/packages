import type { EntityQueryArgs } from '../types';
import type { EntityEdge } from '../../types';
import type { AnyObject } from '@eventespresso/utils';

export type EventsQueryArgs = EntityQueryArgs<AnyObject>;

export interface EventsList<Edge extends EntityEdge> {
	espressoEvents: Edge;
}
