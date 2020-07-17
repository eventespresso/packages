import { UIRegistry } from '../subscription';
import type { NewEntityOptionsArgs } from './types';
import { serviceName as service } from './constants';

class NewEntityOptionsRegistry<D extends string, ET extends string> extends UIRegistry<any, D, typeof service> {
	constructor({ domain, entityType }: NewEntityOptionsArgs<D, ET>) {
		super({ domain, service, path: [entityType] });
	}
}

export default NewEntityOptionsRegistry;
