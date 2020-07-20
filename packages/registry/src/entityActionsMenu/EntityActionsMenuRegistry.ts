import { UIRegistry, ElementProps } from '../subscription';
import type { EntityActionsMenuOptions } from './types';
import { serviceName as service } from './constants';

class EntityActionsMenuRegistry<
	D extends string,
	ET extends string,
	EP extends ElementProps = ElementProps
> extends UIRegistry<EP, D, typeof service> {
	constructor({ domain, entityType }: EntityActionsMenuOptions<D, ET>) {
		super({ domain, service, path: [entityType] });
	}
}

export default EntityActionsMenuRegistry;
