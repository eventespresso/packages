import { useContext } from 'react';
import { RelationsContext } from '../context/RelationsProvider';
import type { RelationsManager } from './types';

const useRelations = (): RelationsManager => {
	return useContext<RelationsManager>(RelationsContext);
};

export default useRelations;
