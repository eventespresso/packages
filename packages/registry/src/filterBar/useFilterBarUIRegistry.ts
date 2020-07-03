import { useUIRegistry } from '../subscription';
import { FilterBarUIRegistryHook } from './types';
import { FilterBarServiceType } from './types';

const useFilterBarUIRegistry: FilterBarUIRegistryHook = ({ domain, listId }) => {
	const path = [listId];

	return useUIRegistry({ domain, path, service: FilterBarServiceType.UI });
};

export default useFilterBarUIRegistry;
