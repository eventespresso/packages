import { UIRegistry, ElementProps } from '../subscription';
import type { NewEntityOptionsArgs } from './types';
import { serviceName as service } from './constants';

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
