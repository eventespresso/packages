import { useContext } from 'react';
import { StatusContext } from '../context/StatusProvider';
import type { StatusManager } from './types';

const useStatus = (): StatusManager => {
	return useContext<StatusManager>(StatusContext);
};

export default useStatus;
