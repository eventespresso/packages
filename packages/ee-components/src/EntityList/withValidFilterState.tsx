import { EntityListFilterStateManager as ELFSM } from '@eventespresso/services';

import { EntityListFilterBar } from './EntityListFilterBar';
import { EntityListFilterBarProps } from './types';

const withValidFilterState =
	<FS extends ELFSM>(
		FilterBarComponent: React.ComponentType<EntityListFilterBarProps<FS>>
	): React.FC<EntityListFilterBarProps<FS>> =>
	({ filterState, ...props }) => {
		return filterState ? <FilterBarComponent filterState={filterState} {...props} /> : null;
	};

export default withValidFilterState(EntityListFilterBar);
