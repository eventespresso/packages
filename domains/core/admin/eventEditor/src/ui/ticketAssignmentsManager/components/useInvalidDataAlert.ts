import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';

import { useRelations } from '@eventespresso/services';
import { useDefaultTicketIds } from '@eventespresso/edtr-services';

import { TAM_ENTITIES } from '../constants';

type Callback = (check: boolean) => void;

const useInvalidDataAlert = (showAlert: VoidFunction): Callback => {
	const { getData } = useRelations();
	const [validateData, setValidateData] = useState(false);
	const defaultTicketIds = useDefaultTicketIds();

	const hasOrphanEntities = useCallback(() => {
		const data = getData();
		// remove default tickets from TAM relations
		const newData = { ...data, tickets: R.omit(defaultTicketIds, data.tickets || {}) };
		// simplify the data for loop
		const entries = Object.entries(R.pick(TAM_ENTITIES, newData));

		for (const [, entityRelations] of entries) {
			for (const [, relations] of Object.entries(entityRelations)) {
				const tamRelations = R.pick(TAM_ENTITIES, relations);
				// flatten the relations
				const relatedIds = Object.values(tamRelations).flat();
				if (!relatedIds.length) {
					return true;
				}
			}
		}
		return false;
	}, [defaultTicketIds, getData]);

	useEffect(() => {
		if (validateData && hasOrphanEntities()) {
			showAlert();
			setValidateData(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [validateData]);

	return setValidateData;
};

export default useInvalidDataAlert;
