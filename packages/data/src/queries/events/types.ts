import { EntityQueryArgs } from '../types';
import { EntityEdge } from '../../types';
import { AnyObject } from '@eventespresso/services';

export type EventsQueryArgs = EntityQueryArgs<AnyObject>;

export interface EventsList<Edge extends EntityEdge> {
  espressoEvents: Edge;
}
