import { useUIRegistry } from '../subscription';
import type { NewEntityOptionsRegistryHook } from './types';
import { serviceName as service } from './constants';

const useNewEntityOptionsRegistry: NewEntityOptionsRegistryHook = ({ domain, entityType }) => {
	const path = [entityType];

	return useUIRegistry({ domain, service, path });
};

export default useNewEntityOptionsRegistry;
