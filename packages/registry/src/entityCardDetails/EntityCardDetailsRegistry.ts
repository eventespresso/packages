import { UIRegistry, ElementProps } from '../subscription';
import type { EntityCardDetailsOptions } from './types';
import { serviceName as service } from './constants';

/**
 * D: Domain name e.g. "eventEditor"
 * ET: Entity Type: The current entity type e.g. "datetime", "ticket"
 * EP: Element Props: The props of the component that's registerd by the consumer
 */
class EntityCardDetailsRegistry<
	D extends string,
	ET extends string,
	EP extends ElementProps = ElementProps
> extends UIRegistry<EP, D, typeof service> {
	constructor({ domain, entityType }: EntityCardDetailsOptions<D, ET>) {
		super({ domain, service, path: [entityType] });
	}
}

export default EntityCardDetailsRegistry;
