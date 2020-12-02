import { useCallback, useEffect, useState } from 'react';
import { pick } from 'ramda';

import { useRelations } from '@eventespresso/services';

import { TAM_ENTITIES } from '../constants';

const useInvalidDataAlert = (showAlert: VoidFunction): VoidFunction => {
	const { getData } = useRelations();
	const [validateData, setValidateData] = useState(false);

	const checkForInvalidData = useCallback(() => setValidateData(true), []);

	const hasOrphanEntities = useCallback(() => {
		// simplify the data for loop
		const data = Object.entries(pick(TAM_ENTITIES, getData()));
		for (const [, entityRelations] of data) {
			for (const [, relations] of Object.entries(entityRelations)) {
				const tamRelations = pick(TAM_ENTITIES, relations);
				// flatten the relations
				const relatedIds = Object.values(tamRelations).flat();
				if (!relatedIds.length) {
					return true;
				}
			}
		}
		return false;
	}, [getData]);

	useEffect(() => {
		if (validateData && hasOrphanEntities()) {
			showAlert();
			setValidateData(false);
		}
	}, [hasOrphanEntities, showAlert, validateData]);

	return checkForInvalidData;
};

export default useInvalidDataAlert;
