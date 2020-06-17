import { useUIRegistry } from '@eventespresso/services/subscription';
import { FilterBarUIRegistryHook, FilterBarServiceType } from './types';

const useFilterBarUIRegistry: FilterBarUIRegistryHook = ({ domain, listId }) => {
  const path = [listId];

  return useUIRegistry({ domain, path, service: FilterBarServiceType.UI });
};

export default useFilterBarUIRegistry;
