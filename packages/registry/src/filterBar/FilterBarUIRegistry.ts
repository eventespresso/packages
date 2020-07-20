import { UIRegistry } from '../subscription';
import { FilterBarUIOptions, FilterBarUIComponentProps } from './types';
import { FilterBarServiceType } from './types';
import type { EntityListFilterStateManager } from '@eventespresso/components';
type ELFSM = EntityListFilterStateManager<any>;

class FilterBarUIRegistry<D extends string, L extends string, FS extends ELFSM> extends UIRegistry<
	FilterBarUIComponentProps<FS>,
	D,
	FilterBarServiceType
> {
	constructor({ domain, listId }: FilterBarUIOptions<D, L>) {
		super({ domain, service: FilterBarServiceType.UI, path: [listId] });
	}
}

export default FilterBarUIRegistry;
