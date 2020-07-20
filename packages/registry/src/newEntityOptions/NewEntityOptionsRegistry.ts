import { UIRegistry, ElementProps } from '../subscription';
import type { NewEntityOptionsArgs } from './types';
import { serviceName as service } from './constants';

/**
 * D: Domain name e.g. "eventEditor"
 * ET: Entity Type: The current entity type e.g. "datetime", "ticket"
 * EP: Element Props: The props of the component that's registerd by the consumer
 */
class NewEntityOptionsRegistry<
	D extends string,
	ET extends string,
	EP extends ElementProps = ElementProps
> extends UIRegistry<EP, D, typeof service> {
	constructor({ domain, entityType, path }: NewEntityOptionsArgs<D, ET>) {
		super({ domain, service, path: path || (entityType && [entityType]) });
	}
}

export default NewEntityOptionsRegistry;
