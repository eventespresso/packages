import { UIRegistry } from '../subscription';
import { FilterBarUIOptions, FilterBarUIComponentProps } from './types';
import { FilterBarServiceType } from './types';
import type { EntityListFilterStateManager } from '@eventespresso/components';
type ELFSM = EntityListFilterStateManager<any>;

/**
 * D: Domain name e.g. "eventEditor"
 * L: List name name e.g. "dates-list", "tickets-list"
 * FS: Filter State (manager): The filter state instance for the current entity list
 */
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
